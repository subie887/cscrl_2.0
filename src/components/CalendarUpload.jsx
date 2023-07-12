import React from "react";
import axios from "axios";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const server_addr = import.meta.env.VITE_SERVER_ADDR

function CalenderUploadForm() {
    const [form, setForm] = React.useState({
        title: "",
        desc: "",
        date: "",
    })
    const [isLoading, setLoading] = React.useState(false)

    function handleChange(event) {
        setForm(prevFormData => ({
            ...prevFormData,
            [event.target.name]: event.target.value
        }))
    }

    let navigate = useNavigate()

    const submit = async event => {
        event.preventDefault()
        
        const formData = new FormData()
        formData.append("title", form.title)
        formData.append("desc", form.desc)
        formData.append("date", form.date)
        setLoading(true)
        await axios.post(`${server_addr}api/calendar`, formData, { headers: {'Content-Type': 'multipart/form-data'}})
        setLoading(false)
    }

    return (
        <div className="upload-form--container">
            <form className="upload-form calendar-upload" onSubmit={submit} method="POST" encType="multipart/form-data">
                <input required={true} onChange={handleChange} type="text" name="title" value={form.title} placeholder="Event title" />
                <textarea required={true} onChange={handleChange} type="text" name="desc" value={form.desc} placeholder="Event Location" />
                <input required={true} onChange={handleChange} type="datetime-local" name="date" value={form.date} />
                {isLoading && <Loader />}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CalenderUploadForm;