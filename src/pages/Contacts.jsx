import React, { useEffect } from "react";
import axios from "axios";
import ContactCard from "../components/ContactCard";

const server_addr = import.meta.env.VITE_SERVER_ADDR

function Contacts() {
    const [contacts, setContacts] = React.useState([])
    useEffect(() => {
        async function getContacts(){
            const contacts = await axios.get(`${server_addr}api/contacts`)
            setContacts(contacts.data)
        }
        getContacts()
    }, [])

    console.log(contacts)
    
    const contactList = contacts.map(contact => (
        <ContactCard
            key={contact.id} 
            fName={contact.fName}
            lName={contact.lName}
            title={contact.title}
            role={contact.role}
            contacts={contact.contacts}
        />
    ))
    
    return (
        <main>
            <h1>Contact Us</h1>
            <div className="contact-list--container">
                <h3>Know someone who would benefit by being involved with the Center for Supply Chain Research at Lehigh Business? Contact us today!</h3>
                {contactList}
                <h3>We are always looking to grow our community!</h3>
            </div>
        </main>
    )
}

export default Contacts;