import React from "react";


function VideoCard(props) {
    //props: {source, title, event, description}
    
    return (
        <article className="video-card--container" >
            <div className="video-card">
                <div>Video Placeholder</div>
                <h2 className="video-card--title">{props.title}</h2>
                <h3 className="video-card--conference">{props.event}</h3>
                <p className="video-card--description">{props.description}</p>
            </div>
        </article>
    )
}

export default VideoCard;