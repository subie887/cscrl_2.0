import React from "react";
import axios from "axios";

const server_addr = import.meta.env.VITE_SERVER_ADDR


function SignUp() {
    const [form, setForm] = React.useState({
        fname: "",
        lname:"",
        company: "",
        role: "",
        email: "",
        password: "",
        vfcode: ""
    })

    const [message, setMessage] = React.useState({
        resultMessage: "",
        messageColor: ""
    })

    function handleChange(event){
        setForm(prevForm => ({
            ...prevForm,
            [event.target.name]: event.target.type == "file" ? event.target.files[0] : event.target.value
        }))
    }

    const submit = async event => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("email", form.email)
        formData.append("password", form.password)
        formData.append("fname", form.fname)
        formData.append("lname", form.lname)
        formData.append("company", form.company)
        formData.append("role", form.role)
        const result = await axios.post(`${server_addr}auth/signup`, formData, { headers: {'Content-Type': 'multipart/form-data'}})
        console.log(result.data)
        if(result.data.name?.includes("Exception")){
            setMessage(prevMessage => ({
                resultMessage: result.data.name,
                messageColor: "red"
            }))
        } else {
            setMessage(prevMessage => ({
                resultMessage: "Code sent to sepcified email",
                messageColor: "green"
            }))
        }
    }

    const verify = async event => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("email", form.email)
        formData.append("vfcode", form.vfcode)
        const result = await axios.post(`${server_addr}auth/verify`, formData, { headers: {'Content-Type': 'multipart/form-data'}})
        console.log(result.data)
    }
    
    return (
        <main>
            <div className="auth-form--container">
                <h2 className="auth-form--title">sign up</h2>
                <form className="auth-form signup" action="">
                    <input className="auth-form--input"
                        onChange={handleChange}
                        value={form.fname}
                        name="fname"
                        placeholder="First Name"
                        type="text"
                        required
                    />
                    <input className="auth-form--input" 
                        onChange={handleChange} 
                        value={form.lname}
                        name="lname"
                        placeholder="Last Name"
                        type="text" 
                        required
                    />
                    <input className="auth-form--input" 
                        onChange={handleChange} 
                        value={form.company}
                        name="company"
                        placeholder="Company"
                        type="text" 
                        required
                    />
                    <input className="auth-form--input" 
                        onChange={handleChange} 
                        value={form.role}
                        name="role"
                        placeholder="Role"
                        type="text"
                        required 
                    />
                    <input className="auth-form--input" 
                        onChange={handleChange} 
                        value={form.email}
                        name="email"
                        placeholder="Email"
                        type="email"
                        required
                    />
                    <input className="auth-form--input" 
                        onChange={handleChange} 
                        value={form.password}
                        name="password"
                        placeholder="Password"
                        type="password"
                        required
                    />
                    <button className="auth-form--button" id="send-code-button" onClick={submit}>Send Code</button>
                    <input className="auth-form--input" 
                        onChange={handleChange} 
                        value={form.vfcode}
                        name="vfcode"
                        placeholder="Verification Code"
                        type="text" 
                    />
                    <button className="auth-form--button wide-button" onClick={verify} disabled={false}>Sign Up</button>
                </form>
                <p style={{color: message.messageColor}}>{message.resultMessage}</p>
            </div>            
        </main>
    )
}

export default SignUp;