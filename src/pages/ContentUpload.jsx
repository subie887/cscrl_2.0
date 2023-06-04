import React from "react";
import { Link, useParams } from "react-router-dom";
import VideoUploadForm from "../components/VideoUploadForm";
import PersonUploadForm from "../components/PersonUploadForm";
import CalenderUploadForm from "../components/CalendarUpload";
import LrmiUploadForm from "../components/LrmiUploadForm";

function ContentUpload() {
    const params = useParams()
    return  (
        <main>
            <h1>{params.type == 'lrmi' ? params.type.toUpperCase() : params.type} upload</h1>
            <Link to={`/${params.type}`} className="regular-button">{"< Back"}</Link>
            <section style={{textAlign: "center"}}>
                <small style={{color: "red"}}>This page is intended for admin use only. <br /> 
                If you accessed this page and do not have admin rights, <br /> 
                please report the issue to technical support immediatelly.</small>
                {
                        params.type === "conferences" ? <VideoUploadForm />
                    :   params.type === "research" ? <PersonUploadForm />
                    :   params.type === "calendar" ? <CalenderUploadForm />
                    :   params.type === "lrmi" ? <LrmiUploadForm />
                    :   <p>ERROR 404 Not Found</p>

                }
            </section>
        </main>
    )
}

export default ContentUpload;