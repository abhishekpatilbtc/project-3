import React, { Component } from "react";
import "./nav.css";

// import React, { Component } from "react";
// import { Link } from "react-router-dom";


class Nav extends Component {
    constructor (props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let buttons;

        if (isLoggedIn) {
            // buttons = <LogoutButton onClick={this.handleLogoutClick} />;
            buttons = 
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/login" id="login" onClick={this.handleLogoutClick}>Log out</a></li>
            </ul>
        } else {
            // buttons = <LoginButton onClick={this.handleLoginClick} />;
            buttons = 
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/login" id="login" onClick={this.handleLoginClick}>Log in</a></li>
                <a className="waves-effect waves-light btn" id="signup" href="/signup">Sign up</a>
            </ul>
        }
        
        return (
            <nav>
                <div className="nav-wrapper" style={{width: '70%', margin: 'auto', backgroundColor: 'white', boxShadow: 'none'}}>
                <a href="/" className="brand-logo">Goodwill Lending</a>
                {/* <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/login" id="login">Log in</a></li>
                    <a className="waves-effect waves-light btn" id="signup" href="/signup">Sign up</a>
                </ul> */}
                { buttons }
                </div>
            </nav>
            
        )
    }
}


export default Nav;