import React from "react";
import PersonCard from "../components/PersonCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const server_addr = import.meta.env.VITE_SERVER_ADDR

function Research() {
    const [associates, setAssociates] = React.useState([])
    let navigate = useNavigate()

    React.useEffect(() => {
        async function getAssociates() {
            const result = await axios.get(`${server_addr}api/associates`)
            setAssociates(result.data)
        }
        getAssociates()
    }, [])


    async function deleteAssociate(id){
        console.log(`Deleting ${id}`)
        const result = await axios.delete(`${server_addr}api/associates/${id}`)
        navigate("/research")
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
            <h1>This is a Research page</h1>
            {associatesList}
        </main>
    )
}

export default Research;