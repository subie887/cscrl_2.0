import React from "react";

function ContactCard(props) {
    return (
        <article style={{margin: "50px"}}>
            <h3 style={{color:"#0066CC"}}>{props.fName} {props.lName} {props.title}</h3>
            <p>{props.role}</p>
            <p>{props.contacts.phone}</p>
            <a style={{color:"#0066CC"}} href={`mailto:${props.contacts.email}`}>{props.contacts.email}</a>
        </article>
    )
}

export default ContactCard;