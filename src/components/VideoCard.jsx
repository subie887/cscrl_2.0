import React from "react";
import { useCookies } from "react-cookie";


function VideoCard(props) {
    //props: {source, title, event, description}
    const [cookies] = useCookies(['_auth_state'])
    return (
        <article className="video-card--container" >
            <div className="video-card">
                {
                    props.source.includes(".pdf") ? 
                    <embed className="video-card--pdf" src={props.source} type="" /> : 
                    <video className="video-card--player" controls>
                        <source src={props.source} />
                    </video>
                }
                <div className="video-card--text">
                    <h2 className="video-card--title">{props.title}</h2>
                    <h3 className="video-card--conference">{props.eventName.replaceAll("-", " ")}</h3>
                    <p className="video-card--description">{props.description}</p>
                </div>
                {cookies?._auth_state.groups.includes('admin') && <button onClick={() => props.handleDelete(props._id)} className="delete-btn" type="delete">Delete</button>}
            </div>
        </article>
    )
}

export default VideoCard;