import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="header">
            <nav className="navbar">
                <img src="../assets/logo-d9d2c759.svg" alt="logo" className="nav--logo"/>
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
                <img src="../assets/default-919349a7.svg" alt="profile-picture" />
            </div>
        </header>
    )
}

export default Header;