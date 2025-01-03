import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import PodcastCard from "../components/PodcastCard";
import { useCookies } from "react-cookie";

const server_addr = import.meta.env.VITE_SERVER_ADDR

function Podcasts() {
    const [podcastsYears, setPodcastsYears] =  React.useState([])
    const [isLoading, setLoading] = React.useState(false)
    const [cookies] = useCookies("_auth_state")

    React.useEffect(() => {
        async function getYears() {
            setLoading(true)
            const result = await axios.get(`${server_addr}api/podcasts`)
            setPodcastsYears(result.data)
            setLoading(false)
        }
        getYears()
    }, [])

    const yearList = podcastsYears.map(year => (
        <Link to={`/podcasts/${year}`} key={year} className="conference-link">{year}</Link>
    ))

    return (
        <main>
            <h1>Podcasts</h1>

            <div className="conference-list--container">
                {cookies?._auth_state.groups.includes('admin') && <Link to="/upload/podcasts" className="regular-button">Upload</Link>}
                {isLoading && <Loader /> }
                {yearList}
            </div>

            
        </main>
    )
}

export default Podcasts;