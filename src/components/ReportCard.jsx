import React from "react";


function ReportCard(props) {
    //props: {source, year, quarter}

    return (
        <article className="video-card--container" >
            <div className="video-card">
                <embed className="video-card--pdf" src={props.source} type="" />
                <div className="video-card--text">
                    <h2 className="video-card--title">LRMI {props.year} Q{props.quarter} report</h2>
                </div>
                <button onClick={() => props.handleDelete(props._id)} className="delete-btn" type="delete">Delete</button>
            </div>
        </article>
    )
}

export default ReportCard;