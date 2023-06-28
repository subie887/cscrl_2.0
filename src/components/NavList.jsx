import Reacts from "react";
import { Link } from "react-router-dom";

function NavList() {
    return (
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
                <Link to='/podcasts' >Podcasts</Link>
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
    )
}

export default NavList;