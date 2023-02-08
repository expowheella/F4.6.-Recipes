import * as React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";


function Header() {
    return (
        <header>
            <ul>
                <Link to="/">Recipes</Link>
            </ul>
        </header>
    )
}

export default Header

