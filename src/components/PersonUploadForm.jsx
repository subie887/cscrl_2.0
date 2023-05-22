import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const server_addr = import.meta.env.VITE_SERVER_ADDR

function PersonUploadForm() {
    const [form, setForm] = React.useState({
        img: undefined,
        firstName: "",
        lastName: "",
        role: "",
        bio: "",
    })

    const navigate = useNavigate()

    function handleChange(event) {
        setForm(prevFormData => ({
            ...prevFormData,
            [event.target.name]: event.target.name == "img" ? event.target.files[0] : event.target.value
        }))
    }

    const submit = async event => {
        event.preventDefault()

        const formData = new FormData()
        formData.append("img", form.img)
        formData.append("firstName", form.firstName)
        formData.append("lastName", form.lastName)
        formData.append("role", form.role)
        formData.append("bio", form.bio)

        await axios.post(`${server_addr}api/associates`, formData, { headers: {'Content-Type': 'multipart/form-data'}})
        .then(
            navigate("/research")
        )

    }

    return (
        <form onSubmit={submit} method="POST" encType="multipart/form-data">
            <input onChange={handleChange} type="file" name="img" accept="image/*"/>
            <input onChange={handleChange} type="text" name="firstName" value={form.firstName} placeholder="First name" />
            <input onChange={handleChange} type="text" name="lastName" value={form.lastName} placeholder="Last name" />
            <input onChange={handleChange} type="text" name="role" value={form.title} placeholder="Role" />
            <input onChange={handleChange} type="text" name="bio" value={form.desc} placeholder="Bio" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default PersonUploadForm;