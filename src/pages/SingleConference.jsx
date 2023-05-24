import React from "react";
import VideoCard from "../components/VideoCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const server_addr = import.meta.env.VITE_SERVER_ADDR

function SingleConference(){
    const params = useParams()
    const [videos, setVideos] = React.useState([])
    const [isLoading, setLoading] = React.useState(false)

    React.useEffect(() => {
        async function getVideos(){
            setLoading(true)
            const result = await axios.get(`${server_addr}api/videos/${params.confname}`)
            setVideos(result.data)
            setLoading(false)
        }
        getVideos()
    }, [])


    async function deleteVideo(id) {
        const result = await axios.delete(`${server_addr}api/videos/${id}`)
        console.log(result)
    }

    const videoCards = videos.map(video => (
        <VideoCard 
            key={video.id}
            _id={video.id}
            source={video.url}
            title={video.title}
            eventName={video.eventName}
            description={video.desc}
            handleDelete={deleteVideo}
        />
    ))

    return (
        <main>
            <h1>{params.confname.replaceAll("-", " ")}</h1>
            {isLoading && <Loader /> }
            {videoCards}
        </main>
    )
}

export default SingleConference;