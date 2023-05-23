import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const server_addr = import.meta.env.VITE_SERVER_ADDR

function ResearchUploadForm(props) {
    const [form, setForm] = React.useState({
        pdf: undefined,
        title: "",
    })

    const navigate = useNavigate()

    function handleChange(event) {
        setForm(prevFormData => ({
            ...prevFormData,
            [event.target.name]: event.target.name == "pdf" ? event.target.files[0] : event.target.value
        }))
    }

    const submit = async event => {
        event.preventDefault()

        const formData = new FormData()
        formData.append("pdf", form.pdf)
        formData.append("title", form.title)

        await axios.post(`${server_addr}api/associates/${props._id}/docs`, formData, { headers: {'Content-Type': 'multipart/form-data'}})
        .then(
            navigate("/research")
        )

    }

    return (
        <form onSubmit={submit} method="POST" encType="multipart/form-data">
            <input onChange={handleChange} type="text" name="title" value={form.title} placeholder="Document title" />
            <input onChange={handleChange} type="file" name="pdf" accept="application/pdf"/>
            
            <button type="submit">Submit</button>
        </form>
    )
}

export default ResearchUploadForm;