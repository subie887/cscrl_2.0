import React from "react";


function SignIn() {
    const [formData, setFormData] = React.useState({
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
        <main className="auth-main">
            <div className="auth-form--container">
                <h2 className="auth-form--title">sign in</h2>
                <form className="auth-form--signin" action="">
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
                    <button className="auth-form--button" onClick={handleSubmit}>Sign In</button>
                </form>
            </div>
        </main>
    )
}

export default SignIn;