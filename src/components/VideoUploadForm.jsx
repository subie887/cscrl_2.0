import React from "react";
import axios from "axios";
import Loader from "./Loader";

const server_addr = import.meta.env.VITE_SERVER_ADDR

function VideoUploadForm() {
    const [events,  setEvents] =  React.useState([])
    const [form, setForm] = React.useState({
        file: undefined,
        eventName: "",
        title: "",
        desc: "",
    })
    const [isLoading, setLoading] = React.useState(false)

    React.useEffect(() => {
        async function getEvents() {
            const result = await axios.get(`${server_addr}api/events`)
            setEvents(result.data)
        }
        getEvents()
    }, [])
    

    function handleChange(event) {
        setForm(prevFormData => ({
            ...prevFormData,
            [event.target.name]: event.target.name == "file" ? event.target.files[0] : event.target.value
        }))
    }

    console.log(events)

    const eventList = events.map(event => {
        const eventName = event?.replaceAll("-", " ")
        return(
            <option key={eventName} value={eventName}>{eventName}</option>
        )
    })

    const submit = async event => {
        event.preventDefault()

        const formData = new FormData()
        formData.append("file", form.file)
        formData.append("eventName", form.eventName.replaceAll(" ", "-").toLowerCase())
        formData.append("title", form.title)
        formData.append("desc", form.desc)
        setLoading(true)
        await axios.post(`${server_addr}api/videos`, formData, { headers: {'Content-Type': 'multipart/form-data'}})
        setLoading(false)
    }

    return (
        <div className="upload-form--container">
            <form className="upload-form video-upload" onSubmit={submit} method="POST" encType="multipart/form-data">
                <input 
                    autoComplete="off"
                    onChange={handleChange}
                    type="text"
                    name="eventName"
                    list="eventList"
                    value={form.eventName}
                    placeholder="Event name"
                    required="true"    
                />
                <datalist id="eventList">
                    {eventList}
                </datalist>
                <input required="true" onChange={handleChange} type="text" name="title" value={form.title} placeholder="Video title" />
                <textarea required="true" onChange={handleChange} type="text" name="desc" value={form.desc} placeholder="Video Description" />
                <input required="true" onChange={handleChange} type="file" name="file" id="videoUpload" accept="video/*"/>
                {isLoading && <Loader />}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default VideoUploadForm;