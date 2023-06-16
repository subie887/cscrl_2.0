import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import Loader from "../components/Loader";


const server_addr = import.meta.env.VITE_SERVER_ADDR


function Calendar() {
    const [cookies] = useCookies(['_auth_state'])
    const [events, setEvents] = React.useState([])
    const [isLoading, setLoading] = React.useState(false)

    React.useEffect(() => {
        async function getEvents(){
            setLoading(true)
            const result = await axios.get(`${server_addr}api/calendar`)
            setEvents(result.data)
            setLoading(false)
        }
        getEvents()
    }, [])


    async function deleteEvent(id){
        const result = await axios.delete(`${server_addr}api/calendar/${id}`)
    }

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };
    
    const eventsRows = events.map(event => (
            <tr key={event.id}>
                <td className="calendar-table--date">{new Intl.DateTimeFormat("en-US", options).format(new Date(event.date))}</td>
                <td className="calendar-table--title">{event.title}</td>
                {cookies?._auth_state.groups.includes('admin') && <td className="delete-btn" onClick={() => deleteEvent(event.id)}>Delete</td>}
            </tr>
        ))

    return (
        <main>
            <h1>Events Calendar</h1>
            <section className="calendar-table--container">
                
                <table className="calendar-table">
                    <thead>    
                        <tr>
                            <th>Date/Time</th>
                            <th>Event</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventsRows}
                    </tbody>
                </table>
                {isLoading && <Loader />}
                {cookies?._auth_state.groups.includes('admin') && <Link to="/upload/calendar" className="regular-button">Add Event</Link>}
            </section>
        </main>
    )
}

export default Calendar;