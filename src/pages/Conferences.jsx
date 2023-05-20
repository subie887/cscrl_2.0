import React from "react";
import VideoCard from "../components/VideoCard";
import axios from "axios";
import UploadForm from "../components/UploadForm";

const server_addr = import.meta.env.VITE_SERVER_ADDR

console.log(server_addr)

function Conferences() {
    const [videos, setVideos] = React.useState([])

    React.useEffect(() => {
        async function getVideos() {
            const result = await axios.get(`${server_addr}api/posts`)
            setVideos(result.data)
        }
        getVideos()
    }, [])

    console.log(videos)
    
    
    const videoCards = videos.map(video => (
        <VideoCard 
            key={video.id}
            title={video.title}
            eventName={video.eventName}
            description={video.desc}
        />
    ))

    return (
        <main>
            <h1>Conferences page</h1>
            <UploadForm />
            {videoCards}

        </main>
    )
}

export default Conferences;