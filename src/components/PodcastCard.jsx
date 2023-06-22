import React from "react";
import { useCookies } from "react-cookie";

function PodcastCard(props) {
    const [cookies] = useCookies(["_auth_state"])
    const [toggled, setToggled] = React.useState(false)

    function handleToggle(){
        setToggled(prevToggled => !prevToggled)
    }

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return (
        <article className="video-card--container" >
            <div className="video-card">
                <h2>{props.title}</h2>
                <small>{new Intl.DateTimeFormat("en-US", options).format(new Date(props.date))} • Lehigh University Business Thought Leadership • Lehigh University</small>
                <div className="controls" style={{margin: "30px 0"}}>
                    <a href={props.source} className="regular-button" target="_none">Listen</a>
                    <a className="regular-button" onClick={handleToggle} style={{marginLeft: "10px", backgroundColor: "#4B2913", borderColor: "#4B2913", color: "white"}}>Info {toggled ? "▼" : "▶"}</a>
                </div>
                <p hidden={!toggled}>{props.description}</p>
                {cookies?._auth_state.groups.includes('admin') && <button onClick={() => props.handleDelete(props._id)} className="delete-btn" type="delete">Delete</button>}
            </div>
        </article>
    )
}

export default PodcastCard;