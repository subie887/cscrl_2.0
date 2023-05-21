import React from "react";


function VideoCard(props) {
    //props: {source, title, event, description}
    console.log(props)
    return (
        <article className="video-card--container" >
            <div className="video-card">
                <video className="video-card--player" controls>
                    <source src={props.source} />
                </video>
                <h2 className="video-card--title">{props.title}</h2>
                <h3 className="video-card--conference">{props.eventName}</h3>
                <p className="video-card--description">{props.description}</p>
            </div>
        </article>
    )
}

export default VideoCard;