import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/cscrl-logo.svg";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

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
                        <Link to='/' >Podcasts</Link>
                    </li>
                    <li className="nav--item">
                        <Link to='/lrmi'>LRMI</Link>
                    </li>
                    <li className="nav--item">
                        <Link to='/newsletter'>Newsletter</Link>
                    </li>
                    <li className="nav--item">
                        <Link to='/contacts'>Contact</Link>
                    </li>
                </ul>
                <button className="regular-button" onClick={logout}>Sign out</button>
            </nav>
        </header>
    )
}

export default Header;