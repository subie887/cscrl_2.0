import React from "react";
import { Link } from "react-router-dom";

function InfoCard(props) {
    //props: {img, title, btnText, link}
    return (
        <article className="info-card--container" style={{backgroundImage: `url(${props.img})`}}>
            <div className="info-card--content">
                <h2 className="info-card--title">{props.title}</h2>
                <Link to={props.link} className="info-card--link">{props.btnText}</Link>
            </div>
        </article>
    )
}

export default InfoCard;