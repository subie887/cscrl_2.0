import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import NewsletterLink from "../components/NewsletterLink";
import PodcastCard from "../components/PodcastCard";

const server_addr = import.meta.env.VITE_SERVER_ADDR

function PodcastYear(){
    const params = useParams()
    const [podcasts, setPodcasts] = React.useState([])
    const [isLoading, setLoading] = React.useState(false)

    React.useEffect(() => {
        async function getPodcasts(){
            setLoading(true)
            const result = await axios.get(`${server_addr}api/podcasts/${params.year}`)
            setPodcasts(result.data)
            setLoading(false)
        }
        getPodcasts()
    }, [])

    async function handleDelete(id) {
        const result = await axios.delete(`${server_addr}api/podcasts/${id}`)
    }

    const podcastCards = podcasts.map(podcast => (
        <PodcastCard
            key={podcast.id}
            _id={podcast.id}
            title={podcast.title}
            description={podcast.description}
            date={podcast.date}
            source={podcast.source}
        />
    ))

    return (
        <main>
            <h1>{params.year} Podcasts</h1>
            <Link to="/podcasts" className="regular-button">{"< Back"}</Link>
            {isLoading && <Loader /> }
            {podcastCards}
        </main>
    )
}

export default PodcastYear;