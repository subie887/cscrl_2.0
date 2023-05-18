import React from "react";
import PersonCard from "../components/PersonCard";
import response from "../../temp_db/associates";

function SignUp() {
    const [formData, setFormData] = React.useState({
        fname: "",
        lname:"",
        company: "",
        email: "",
        password: "",
    })

    function handleChange(event){
        setFormData(prevForm => ({
            ...prevForm,
            [event.target.name]:event.target.value
        }))
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(formData)
    }
    
    return (
        <main>
            <div className="auth-form--container">
                <h2 className="auth-form--title">sign up</h2>
                <form className="auth-form" action="">
                    <input className="auth-form--input"
                        onChange={handleChange}
                        value={formData.fname}
                        name="fname"
                        placeholder="First Name"
                        type="text" 
                    />
                    <input className="auth-form--input" 
                        onChange={handleChange} 
                        value={formData.lname}
                        name="lname"
                        placeholder="Last Name"
                        type="text" 
                    />
                    <input className="auth-form--input" 
                        onChange={handleChange} 
                        value={formData.company}
                        name="company"
                        placeholder="Company"
                        type="text" 
                    />
                    <input className="auth-form--input" 
                        onChange={handleChange} 
                        value={formData.email}
                        name="email"
                        placeholder="Email"
                        type="email" 
                    />
                    <input className="auth-form--input" 
                        onChange={handleChange} 
                        value={formData.password}
                        name="password"
                        placeholder="Password"
                        type="password" 
                    />
                    <button className="auth-form--button" onClick={handleSubmit}>Sign Up</button>
                </form>
            </div>
        </main>
    )
}

export default SignUp;