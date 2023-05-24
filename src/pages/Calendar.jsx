import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const server_addr = import.meta.env.VITE_SERVER_ADDR


function Calendar() {
    const [events, setEvents] = React.useState([])
    const [isAdmin, setIsAdmin] = React.useState(true)
    React.useEffect(() => {
        async function getEvents(){
            const result = await axios.get(`${server_addr}api/calendar`)
            setEvents(result.data)
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
    
    const table = (
        <section className="calendar-table--container">
            
            <table className="calendar-table">
                <thead>    
                    <tr>
                        <th>Date/Time</th>
                        <th>Event</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        events.map(event => (
                            <tr key={event.id}>
                                <td className="calendar-table--date">{new Intl.DateTimeFormat("en-US", options).format(new Date(event.date))}</td>
                                <td className="calendar-table--title">{event.title}</td>
                                <td className="calendar-table--desc">{event.desc}</td>
                                {isAdmin && <td className="delete-btn" onClick={() => deleteEvent(event.id)}>Delete</td>}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {isAdmin && <Link to="/upload/calendar" className="regular-button">Add Event</Link>}
        </section>
            
    )

    return (
        <main>
            <h1>Events Calendar</h1>
            {table}
        </main>
    )
}

export default Calendar;