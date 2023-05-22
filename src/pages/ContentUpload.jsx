import React from "react";
import { useParams } from "react-router-dom";
import VideoUploadForm from "../components/VideoUploadForm";
import PersonUploadForm from "../components/PersonUploadForm";

function ContentUpload() {
    const params = useParams()
    return  (
        <main>
            {
                    params.type === "content" ? <VideoUploadForm />
                :   params.type === "person" ? <PersonUploadForm />
                :   <p>Error</p>

                
            }
        </main>
    )
}

export default ContentUpload;