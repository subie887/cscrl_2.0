import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const server_addr = import.meta.env.VITE_SERVER_ADDR

function UploadForm() {
    const [form, setForm] = React.useState({
        file: undefined,
        eventName: "",
        title: "",
        desc: "",
    })

    const navigate = useNavigate()

    function handleChange(event) {
        setForm(prevFormData => ({
            ...prevFormData,
            [event.target.name]: event.target.name == "file" ? event.target.files[0] : event.target.value
        }))
    }

    const submit = async event => {
        event.preventDefault()

        const formData = new FormData()
        formData.append("file", form.file)
        formData.append("eventName", form.eventName.replaceAll(" ", "-").toLowerCase())
        formData.append("title", form.title)
        formData.append("desc", form.desc)

        await axios.post(`${server_addr}api/videos`, formData, { headers: {'Content-Type': 'multipart/form-data'}})

        navigate("/")
    }

    return (
        <form onSubmit={submit} method="POST" encType="multipart/form-data">
            <input onChange={handleChange} type="file" name="file" accept="video/*"/>
            <input onChange={handleChange} type="text" name="eventName" value={form.eventName} placeholder="Event name" />
            <input onChange={handleChange} type="text" name="title" value={form.title} placeholder="Video title" />
            <input onChange={handleChange} type="text" name="desc" value={form.desc} placeholder="Video Description" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default UploadForm;