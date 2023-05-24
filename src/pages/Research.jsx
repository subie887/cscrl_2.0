import React from "react";
import PersonCard from "../components/PersonCard";
import axios from "axios";
import { Link } from "react-router-dom";
import { ProgressBar } from "react-loader-spinner";

const server_addr = import.meta.env.VITE_SERVER_ADDR

function Research() {
    const [associates, setAssociates] = React.useState([])
    const [isLoading, setLoading] = React.useState(false)
    React.useEffect(() => {
        async function getAssociates() {
            setLoading(true)
            const result = await axios.get(`${server_addr}api/associates`)
            setAssociates(result.data)
            setLoading(false)
        }
        getAssociates()
    }, [])


    async function deleteAssociate(id){
        console.log(`Deleting ${id}`)
        const result = await axios.delete(`${server_addr}api/associates/${id}`)
    }
    
    //props: {img, firstName, lName, role, bio, docs[{title, link}]}
    const associatesList = associates.map(associate => (
        <PersonCard 
            key={associate.id}
            _id={associate.id}
            img={associate.img}
            docs={associate.docs}
            firstName={associate.firstName}
            lastName={associate.lastName}
            role={associate.role}
            bio={associate.bio}
            handleDelete={deleteAssociate}
        />
    ))
    
    const load = (
        <ProgressBar
        height="80"
        width="100%"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor = '#4B2913'
        barColor = '#FFD94A'
        />
    )

    return (
        <main>
            <h1>Research</h1>
            <Link to="/upload/research" className="regular-button">Upload</Link>
            {isLoading && load}
            {associatesList}
        </main>
    )
}

export default Research;