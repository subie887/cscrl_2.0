import React from "react";


function NewsletterLink(props) {
    //props: {source, year, quarter}

    return (
        <div className="conference-link" style={{display: "flex", justifyContent: "center"}}>
            <a key={props._id} href={props.source} style={{width: "95%", color:"#000000"}}>{props.title}</a>
            <button onClick={() => props.handleDelete(props._id)} style={{width: "5%"}}>Delete</button>
        </div>
    )
}

export default NewsletterLink;