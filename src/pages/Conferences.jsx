import React from "react";
import VideoCard from "../components/VideoCard";
import axios from "axios";
import UploadForm from "../components/UploadForm";
import { Link } from "react-router-dom";

const server_addr = import.meta.env.VITE_SERVER_ADDR

function Conferences() {
    const [videos, setVideos] = React.useState([])
    const [conferences,  setConferences] =  React.useState([])

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
                <UploadForm />
                {videos == [] ? <h1>Loading...</h1> : conferenceList}
            </div>

        </main>
    )
}

export default Conferences;