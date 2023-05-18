import React from "react";
import PersonCard from "../components/PersonCard";
import avatar from "../assets/avatar-placeholder.jpg"
import response from "../../temp_db/associates";

function Research() {
    const [associates, setAssociates] = React.useState(response.data.associates)
    const associatesCards = associates.map(associate => (
        <PersonCard
            key={associate._id}
            img={associate.img} 
            fName={associate.fName}
            lName={associate.lName}
            role={associate.role}
            bio={associate.bio}
            docs={associate.docs} 
        />
    ))

    return (
        <main>
            <h1>This is a Research page</h1>
            {associatesCards}
        </main>
    )
}

export default Research;