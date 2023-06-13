import React from "react";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";



const server_addr = import.meta.env.VITE_SERVER_ADDR


function SignIn() {
    const [form, setForm] = React.useState({
        email: "",
        password: "",
    })
    const [challengeForm, setChallengeForm] = React.useState({
        firstName: "",
        lastName: "",
        newPassword: "",
        confirmNewPassword: "",
        session: "",
    })
    const [responseData, setResponseData] = React.useState({})

    const signIn = useSignIn()
    const navigate = useNavigate()

    function handleChange(event){
        setForm(prevForm => ({
            ...prevForm,
            [event.target.name]: event.target.value
        }))
    }

    function handleChallengeChange(event){
        setChallengeForm(prevChallengeForm => ({
            ...prevChallengeForm,
            [event.target.name]: event.target.value
        }))
    }

    React.useEffect(() => {
        if('Session' in responseData){
            setChallengeForm(prevChallengeForm => ({
                ...prevChallengeForm,
                session: responseData.Session
            }))
        }

        if('AuthenticationResult' in responseData){
            const authResult = responseData.AuthenticationResult
            signIn({
                token: authResult.IdToken,
                expiresIn: authResult.ExpiresIn,
                tokenType: authResult.TokenType,
                authState: { 
                    email: authResult.decoded.email,
                    firstName: authResult.decoded.given_name,
                    lastName: authResult.decoded.family_name,
                    groups: authResult.decoded['cognito:groups'],
                }
            })
            navigate("/")
        }
    }, [responseData, challengeForm.session])

    const submit = async event => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("email", form.email)
        formData.append("password", form.password)
        try {
            const response = await axios.post(`${server_addr}auth/signin`, formData, { headers: {'Content-Type': 'multipart/form-data'}})
            setResponseData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const respondToChallenge = async event => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("firstName", challengeForm.firstName)
        formData.append("lastName", challengeForm.lastName)
        formData.append("username", form.email)
        formData.append("newPassword", challengeForm.newPassword)
        formData.append("session", challengeForm.session)
        const response = await axios.post(`${server_addr}auth/register`, formData, { headers: {'Content-Type': 'multipart/form-data'}})
        navigate("/")
    }
    
    return (
        <main className="auth-main">
            {
                'Session' in responseData ?
                <div className="auth-form--container">
                    <h2 className="auth-form--title">Register</h2>
                    <p>All new users are required to set their own password</p>
                    <p>Password requirements</p>
                    <ul>
                        <li>8-characters minimum</li>
                        <li>Contains at least 1 number</li>
                        <li>Contains at least 1 lowercase letter</li>
                        <li>Contains at least 1 uppercase letter</li>
                        <li>Contains at least 1 special character</li>
                    </ul>
                    <form className="auth-form signin" action="">
                        <input className="auth-form--input" 
                            onChange={handleChallengeChange} 
                            value={challengeForm.firstName}
                            name="firstName"
                            placeholder="First Name"
                            type="text"
                            autoComplete="off"
                        />
                        <input className="auth-form--input" 
                            onChange={handleChallengeChange} 
                            value={challengeForm.lastName}
                            name="lastName"
                            placeholder="Last Name"
                            type="text" 
                            autoComplete="off"
                        />
                        <input className="auth-form--input" 
                            onChange={handleChallengeChange} 
                            value={challengeForm.newPassword}
                            name="newPassword"
                            placeholder="New password"
                            type="password" 
                            autoComplete="off"
                        />
                        <input className="auth-form--input" 
                            onChange={handleChallengeChange} 
                            value={challengeForm.confirmNewPassword}
                            name="confirmNewPassword"
                            placeholder="Confirm password"
                            type="password"
                            autoComplete="off"
                        />
                        <button className="auth-form--button wide-button" onClick={respondToChallenge}>Confirm</button>
                    </form>
                </div>
                :
                <div className="auth-form--container">
                    <h2 className="auth-form--title">sign in</h2>
                    <form className="auth-form signin" action="">
                        <input className="auth-form--input" 
                            onChange={handleChange} 
                            value={form.email}
                            name="email"
                            placeholder="Email"
                            type="email" 
                        />
                        <input className="auth-form--input" 
                            onChange={handleChange} 
                            value={form.password}
                            name="password"
                            placeholder="Password"
                            type="password" 
                        />
                        <button className="auth-form--button wide-button" onClick={submit}>Sign In</button>
                    </form>
                </div>
            }
        </main>
    )
}

export default SignIn;