import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const server_addr = import.meta.env.VITE_SERVER_ADDR
const currentYear = new Date().getFullYear()

function PodcastsUploadForm(props) {
    const [form, setForm] = React.useState({
        title: "",
        description: "",
        date: "",
        source: ""
    })
    const [isLoading, setLoading] = React.useState(false)


    function handleChange(event) {
        setForm(prevFormData => ({
            ...prevFormData,
            [event.target.name]: event.target.name == "pdf" ? event.target.files[0] : event.target.value
        }))
    }

    function clear() {
        setForm({
            title: "",
            description: "",
            date: "",
            source: ""
        })
    }
    
    let navigate = useNavigate()
    const submit = async event => {
        event.preventDefault()
        
        const formData = new FormData()
        formData.append("title", form.title)
        formData.append("description", form.description)
        formData.append("date", form.date)
        formData.append("source", form.source)
        setLoading(true)
        await axios.post(`${server_addr}api/podcasts/`, formData, { headers: {'Content-Type': 'multipart/form-data'}})
        setLoading(false)
        clear()
    }

    return (
        <form onSubmit={submit} method="POST" encType="multipart/form-data">
            <input onChange={handleChange} type="text" name="title" value={form.title} placeholder="Title"/>
            <input onChange={handleChange} type="text" name="description" value={form.description} placeholder="Description"/>
            <input onChange={handleChange} type="text" name="source" value={form.source} placeholder="Link"/>
            <input required={true} onChange={handleChange} type="date" name="date" value={form.date} />
            {isLoading && <Loader /> }
            <button type="submit">Submit</button>
        </form>
    )
}

export default PodcastsUploadForm;