import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useCookies } from "react-cookie";

const server_addr = import.meta.env.VITE_SERVER_ADDR

function Conferences() {
    const [cookies] = useCookies(['_auth_state'])
    const [conferences,  setConferences] =  React.useState([])
    const [isLoading, setLoading] = React.useState(false)

    React.useEffect(() => {
        async function getEvents() {
            setLoading(true)
            const result = await axios.get(`${server_addr}api/events`)
            setConferences(result.data)
            setLoading(false)
        }
        getEvents()
    }, [])

    const conferenceList = conferences.map(conf => (
        <Link to={`/conferences/${conf?.replaceAll(" ", "-").toLowerCase()}`} key={conf} className="conference-link">{conf?.replaceAll("-", " ")}</Link>
    ))

    
    return (
        <main>
            <h1>Conferences</h1>
            <div className="conference-list--container">
                {cookies?._auth_state.groups.includes('admin') && <Link to="/upload/conferences" className="regular-button">Upload</Link>}
                {isLoading && <Loader /> }
                {conferenceList}
            </div>
            
        </main>
    )
}

export default Conferences;