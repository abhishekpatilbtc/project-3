import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./nav.css";

class Nav extends Component {
    constructor (props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {}
    }

    handleLoginClick() {
    
    }

    handleLogoutClick() {
    // logout this will clear storage or cookie
    localStorage.removeItem('token')
    localStorage.removeItem('User')
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper" style={{width: '70%', margin: 'auto', backgroundColor: 'white', boxShadow: 'none'}}>
                <a href='/' className="brand-logo">Equity</a>
        {localStorage.getItem('token') ?
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li> <a href={'/user/' + localStorage.getItem('User')} id="login">Home</a></li>
                <li> <a href='/friends' id="login">Friends</a></li>
                <li> <a href='/userlist' id="login">Search</a></li>
                <li> <a href='/' id="login" onClick={this.handleLogoutClick}>Logout</a></li>
            </ul>
        :
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li> <a href="/login" id="login" >Log in</a></li>
                <a className="waves-effect waves-light btn" id="signup" href="/signup">Sign Up</a>
            </ul>}

                </div>
            </nav>
            
        )
    }
}


export default Nav;