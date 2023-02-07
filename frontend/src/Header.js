import * as React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";


function Header() {
    return (
        <header>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    Header
                </li>
            </ul>
        </header>
    )
}

export default Header

