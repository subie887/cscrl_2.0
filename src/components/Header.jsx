import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"

function Header() {
    return(
        <header className="header">
            <nav className="navbar">
                <img src={logo} alt="logo" className="nav--logo"/>
                <ul className="nav--menu">
                    <li className="nav--item">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="nav--item">
                        <Link to='/calendar'>Calendar</Link>
                    </li>
                    <li className="nav--item">
                        <Link to='/contacts'>Contacts</Link>
                    </li>
                    <li className="nav--item">
                        <Link to='/'>Podcasts</Link>
                    </li>
                </ul>
            </nav>
            <div className="account--menu">
                <img src="default.svg" alt="profile-picture" />
            </div>
        </header>
    )
}

export default Header;