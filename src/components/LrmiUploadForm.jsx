import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const server_addr = import.meta.env.VITE_SERVER_ADDR
const currentYear = new Date().getFullYear()
function LrmiUploadForm(props) {
    const [form, setForm] = React.useState({
        pdf: undefined,
        year: 0,
        quarter: 0,
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
        formData.append("quarter", form.quarter)
        setLoading(true)
        await axios.post(`${server_addr}api/lrmi/`, formData, { headers: {'Content-Type': 'multipart/form-data'}})
        setLoading(false)
        
    }

    let yearList = [];
    const startYear = currentYear - 3;
    for(let i = 0; i < currentYear - startYear + 3; i++){
        yearList.push(
            <option key= {startYear + i} value={startYear + i}>{startYear + i}</option>
        )
    }

    return (
        <form onSubmit={submit} method="POST" encType="multipart/form-data">
            <input onChange={handleChange} type="file" name="pdf" accept="application/pdf"/>
            <select onChange={handleChange} name="year" id="" value={form.year}>
                <option value="0" disabled>-- select report year --</option>
                {yearList}
            </select>
            <select onChange={handleChange} name="quarter" id="" value={form.quarter}>
                <option value="0" disabled>-- select report quarter --</option>
                <option value="1">Q1</option>
                <option value="2">Q2</option>
                <option value="3">Q3</option>
                <option value="4">Q4</option>
            </select>
            {isLoading && <Loader /> }
            <button type="submit">Submit</button>
        </form>
    )
}

export default LrmiUploadForm;