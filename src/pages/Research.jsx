import React from "react";
import PersonCard from "../components/PersonCard";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useCookies } from "react-cookie";


const server_addr = import.meta.env.VITE_SERVER_ADDR

function Research() {
    const [cookies] = useCookies(['_auth_state'])
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

    return (
        <main>
            <h1>Research</h1>
            {cookies?._auth_state.groups.includes('admin') && <Link to="/upload/research" className="regular-button">Upload</Link>}
            {isLoading && <Loader />}
            {associatesList}
        </main>
    )
}

export default Research;