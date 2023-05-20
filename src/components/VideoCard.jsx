import React from "react";


function VideoCard(props) {
    //props: {source, title, event, description}
    
    return (
        <article className="video-card--container" >
            <div className="video-card">
                <video className="video-card--player" controls>
                    <source src="https://d20juj4k45r4a1.cloudfront.net/97a22b30d97a2377475c5c8a28abd77d4f5e339b5c970d2a5e03a8726c1af494.mp4" />
                </video>
                <h2 className="video-card--title">{props.title}</h2>
                <h3 className="video-card--conference">{props.eventName}</h3>
                <p className="video-card--description">{props.description}</p>
            </div>
        </article>
    )
}

export default VideoCard;