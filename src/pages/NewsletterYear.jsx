import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import NewsletterLink from "../components/NewsletterLink";

const server_addr = import.meta.env.VITE_SERVER_ADDR

function NewsletterYear(){
    const params = useParams()
    const [letters, setLetters] = React.useState([])
    const [isLoading, setLoading] = React.useState(false)

    React.useEffect(() => {
        async function getletters(){
            setLoading(true)
            const result = await axios.get(`${server_addr}api/newsletter/${params.year}`)
            setLetters(result.data)
            setLoading(false)
        }
        getletters()
    }, [])

    async function handleDelete(id) {
        const result = await axios.delete(`${server_addr}api/newsletter/${id}`)
    }

    const letterLinks = letters.map(letter => (
        <NewsletterLink
            key={letter.id}
            _id={letter.id}
            source={letter.url}
            year={letter.year}
            title={letter.title}
            handleDelete={handleDelete}
        />
    ))

    return (
        <main>
            <h1>{params.year} Newsletter</h1>
            <Link to="/newsletter" className="regular-button">{"< Back"}</Link>
            {isLoading && <Loader /> }
            {letterLinks}
        </main>
    )
}

export default NewsletterYear;