import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const server_addr = import.meta.env.VITE_SERVER_ADDR
const currentYear = new Date().getFullYear()
function NewsletterUploadForm(props) {
    const [form, setForm] = React.useState({
        pdf: undefined,
        year: 0,
        month: 0,
        title: "",
    })
    const [isLoading, setLoading] = React.useState(false)


    function handleChange(event) {
        setForm(prevFormData => ({
            ...prevFormData,
            [event.target.name]: event.target.name == "pdf" ? event.target.files[0] : event.target.value
        }))
    }
    
    let navigate = useNavigate()
    const submit = async event => {
        event.preventDefault()
        
        const formData = new FormData()
        formData.append("pdf", form.pdf)
        formData.append("year", form.year)
        formData.append("month", form.month)
        formData.append("title", form.title)
        setLoading(true)
        await axios.post(`${server_addr}api/newsletter/`, formData, { headers: {'Content-Type': 'multipart/form-data'}})
        setLoading(false)
    }

    let yearList = [];
    const startYear = currentYear - 6;
    for(let i = 0; i < currentYear - startYear + 3; i++){
        yearList.push(
            <option key= {startYear + i} value={startYear + i}>{startYear + i}</option>
        )
    }

    return (
        <form onSubmit={submit} method="POST" encType="multipart/form-data">
            <input onChange={handleChange} type="file" name="pdf" accept="application/pdf"/>
            <input onChange={handleChange} type="text" name="title" value={form.title} placeholder="Title"/>
            <select onChange={handleChange} name="year" id="" value={form.year}>
                <option value="0" disabled>-- select newsletter year --</option>
                {yearList}
            </select>
            <select onChange={handleChange} name="month" id="" value={form.month}>
                <option value="0" disabled>-- select newsletter month --</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>
            {isLoading && <Loader /> }
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewsletterUploadForm;