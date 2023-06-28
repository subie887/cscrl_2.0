import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/cscrl-logo.svg";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import NavList from "./NavList";

function Header() {
    const signOut = useSignOut()
    const naigate = useNavigate()
    const logout = () => {
        signOut()
        naigate('/signin')
    }
    return(
        <header className="header">
            <nav className="navbar">
                <Link to='/'>
                    <img src={logo} alt="logo" className="nav--logo"/>
                </Link>
                <NavList />
                <button className="regular-button" onClick={logout}>Sign out</button>
            </nav>
        </header>
    )
}

export default Header;