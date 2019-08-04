import React from "react";
import "./nav.css";

// import React, { Component } from "react";
// import { Link } from "react-router-dom";

function Nav () {
    return (
        <nav>
        <div className="nav-wrapper" style={{width: '70%', margin: 'auto', backgroundColor: 'white', boxShadow: 'none'}}>
        <a href="/" className="brand-logo">Goodwill Lending</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="collapsible.html" id="login">How It Works</a></li>
            <li><a href="/login" id="login">Log in</a></li>
            <a className="waves-effect waves-light btn" id="signup" href="/signup">Sign up</a>
        </ul>
        </div>
    </nav>
    );
}


export default Nav;