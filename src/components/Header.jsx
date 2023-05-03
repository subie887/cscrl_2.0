import React from "react";
import { Link } from "react-router-dom";
import "../assets/logo.svg"
import "../assets/default.svg"

function Header() {
    return(
        <header className="header">
            <nav className="navbar">
                <img src="/assets/logo.svg" alt="logo" className="nav--logo"/>
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
                <img src="./src/assets/default.svg" alt="profile-picture" />
            </div>
        </header>
    )
}

export default Header;