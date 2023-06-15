import React from "react";
import { useCookies } from "react-cookie";


function ReportCard(props) {
    //props: {source, year, quarter}
    const [cookies] = useCookies(['_auth_state'])
    return (
        <article className="video-card--container" >
            <div className="video-card">
                <embed className="video-card--pdf" src={props.source} type="" />
                <div className="video-card--text">
                    <h2 className="video-card--title">LRMI {props.year} Q{props.quarter} report</h2>
                </div>
                {cookies?._auth_state.groups.includes('admin') && <button onClick={() => props.handleDelete(props._id)} className="delete-btn" type="delete">Delete</button>}
            </div>
        </article>
    )
}

export default ReportCard;