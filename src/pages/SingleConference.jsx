import React from "react";
import VideoCard from "../components/VideoCard";
import { useParams } from "react-router-dom";
import axios from "axios";

const server_addr = import.meta.env.VITE_SERVER_ADDR

function SingleConference(){
    const params = useParams()
    const [videos, setVideos] = React.useState([])

    React.useEffect(() => {
        async function getVideos(){
            const result = await axios.get(`${server_addr}api/videos/${params.confname}`)
            setVideos(result.data)
        }
        getVideos()
    }, [])

    const videoCards = videos.map(video => (
        <VideoCard 
            key={video.id}
            source={video.url}
            title={video.title}
            eventName={video.eventName}
            description={video.desc}
        />
    ))

    return (
        <main>
            <h1>{params.confname}</h1>
            {videoCards}
        </main>
    )
}

export default SingleConference;