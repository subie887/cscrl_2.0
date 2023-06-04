import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/cscrl-logo.svg";

function Header() {
    return(
        <header className="header">
            <nav className="navbar">
                <Link to='/'>
                    <img src={logo} alt="logo" className="nav--logo"/>
                </Link>
                <ul className="nav--menu">
                    <li className="nav--item">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="nav--item">
                        <Link to='/conferences'>Conferences</Link>
                    </li>
                    <li className="nav--item">
                        <Link to='/research'>Research</Link>
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
                <button className="regular-button">Sign out</button>
            </nav>
        </header>
    )
}

export default Header;