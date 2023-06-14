import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const server_addr = import.meta.env.VITE_SERVER_ADDR

function Newsletter() {
    const [newsletterYears, setNewsletterYears] =  React.useState([])
    const [isLoading, setLoading] = React.useState(false)

    React.useEffect(() => {
        async function getYears() {
            setLoading(true)
            const result = await axios.get(`${server_addr}api/newsletter`)
            setNewsletterYears(result.data)
            setLoading(false)
        }
        getYears()
    }, [])

    const yearList = newsletterYears.map(year => (
        <Link to={`/newsletter/${year}`} key={year} className="conference-link">{year}</Link>
    ))

    
    return (
        <main>
            <h1>Newsletter</h1>
            <div className="conference-list--container">
                <Link to="/upload/newsletter" className="regular-button">Upload</Link>
                {isLoading && <Loader /> }
                {yearList}
            </div>
            
        </main>
    )
}

export default Newsletter;