import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

dotenv.config()

server_addr = process.env.SERVER_ADDRESS

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
        formData.append("eventName", form.eventName)
        formData.append("title", form.title)
        formData.append("desc", form.desc)

        await axios.post(`${server_addr}api/posts`, formData, { headers: {'Content-Type': 'multipart/form-data'}})

        navigate("/conferences")
    }

    return (
        <form onSubmit={submit} method="POST" encType="multipart/form-data">
            <input onChange={handleChange} type="file" name="file" accept="video/*"/>
            <input onChange={handleChange} type="text" name="eventName" value={form.eventName}/>
            <input onChange={handleChange} type="text" name="title" value={form.title}/>
            <input onChange={handleChange} type="text" name="desc" value={form.desc}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default UploadForm;