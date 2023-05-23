import React from "react";
import axios from "axios";
import VideoUploadForm from "../components/VideoUploadForm";
import { Link, useNavigate } from "react-router-dom";

const server_addr = import.meta.env.VITE_SERVER_ADDR

function Conferences() {
    const [conferences,  setConferences] =  React.useState([])
    let navigate = useNavigate()
    React.useEffect(() => {
        async function getEvents() {
            const result = await axios.get(`${server_addr}api/events`)
            setConferences(result.data)
        }
        getEvents()
    }, [])

    const conferenceList = conferences.map(conf => (<Link to={`/conferences/${conf?.replaceAll(" ", "-").toLowerCase()}`} key={conf} className="conference-link">{conf}</Link>))

    return (
        <main>
            <h1>Conferences page</h1>
            <div className="conferernce-list--container">
                {conferenceList}
            </div>
        </main>
    )
}

export default Conferences;