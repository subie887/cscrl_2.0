import React from "react";
import VideoCard from "../components/VideoCard";
import axios from "axios";
import UploadForm from "../components/UploadForm";

function Conferences() {
    const [videos, setVideos] = React.useState([])

    React.useEffect(() => {
        async function getVideos() {
            const result = await axios.get("http://localhost:3000/api/posts")
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