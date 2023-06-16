import React from "react";
import ResearchUploadForm from "./ResearchUploadForm";
import { useCookies } from "react-cookie";

function PersonCard(props) {
    //props: {img, fName, lName, role, bio, docs[{title, link}]}
    const [cookies] = useCookies(['_auth_state'])
    const docsList = props.docs.map(doc => <li key={doc.title}><a href={doc.link} target="_blank">{doc.title}</a></li>)
    
    return (
        <article className="person-card--container" >
            <div className="person-card--info" >
                <img className="person-card--img" src={props.img} alt="" />
                <h3 className="person-card--name">{props.firstName} {props.lastName}</h3>
                <h4 className="person-card--role">{props.role}</h4>
            </div>

            <div className="person-card--research" >
                <h4>About:</h4>
                <p className="person-card--bio">{props.bio}</p>
                <h4>Research:</h4>
                <ul className="person-card--links">
                    {docsList}
                </ul>
                {cookies?._auth_state.groups.includes('admin') && <ResearchUploadForm _id={props._id} />}
            </div>

            <div className="controls">
                {cookies?._auth_state.groups.includes('admin') && <button className="delete-btn" onClick={() => props.handleDelete(props._id)}>delete</button>}
            </div>

        </article>
    )
}

export default PersonCard;