import React from "react";
import { useCookies } from "react-cookie";


function NewsletterLink(props) {
    //props: {source, year, quarter}
    const [cookies] = useCookies(['_auth_state'])
    return (
        <div className="conference-link" style={{display: "flex", justifyContent: "center"}}>
            <a key={props._id} href={props.source} style={{width: "95%", color:"#000000"}}>{props.title}</a>
            {cookies?._auth_state.groups.includes('admin') && <button onClick={() => props.handleDelete(props._id)} style={{width: "5%"}}>Delete</button>}
        </div>
    )
}

export default NewsletterLink;