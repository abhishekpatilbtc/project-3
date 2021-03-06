import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./signup.css";
// import Login from "../Login/login";

class Signup extends Component {
  constructor (props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password: '',
      redirectTo: null
    }
  }

  handleClick(event) {
    // const apiBaseUrl = "/api";
    const payload = {
      "first": this.state.first_name,
      "last": this.state.last_name,
      "email": this.state.email,
      "username": this.state.username,
      "password": this.state.password
    }
    // console.log(payload);
    axios.post('/api/register', payload)
      .then((res)=> {
        console.log("$---------$")
        console.log(res);
        if (res.status === 200) {
          console.log ("Registration successfull");
          this.setState({redirectTo:"/login"})
        }
      })
    .catch(function (err) {
      console.log(err);
    });
  }

  render () {
    if(this.state.redirectTo){
        return (<Redirect to={{ pathname: this.state.redirectTo }}/>)
    } 

    else
    return (
      
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card">
            <div className="card-action teal lighten-1 white-text">
              <h4>Sign Up</h4>
            </div>
            <div className="card-content">
              <div className="row">
                <div className="col s6">
                  <div className="form-field">
                  <label htmlFor="firstname">First Name</label>
                  <input type="text" id="firstname" 
                    // onChange={this.handleInputChange}
                    onChange = {(event) => this.setState ({ first_name: event.target.value})}
                    />
                  </div><br />
                </div>
                <div className="col s6">
                  <div className="form-field">
                  <label htmlFor="lastname">Last Name</label>
                  <input type="text" id="lastname" 
                    onChange={ (event) => this.setState ({last_name: event.target.value})}/>
                  </div><br />
                </div>
              </div>
  
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" 
                  onChange = {( event ) => this.setState ({ email: event.target.value})}/>
              </div><br />
  
              <div className="form-field">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" 
                  onChange = {( event ) => this.setState ({ username: event.target.value})}/>
              </div><br />
  
              <div className="form-field">
                <label htmlFor="username">Password</label>
                <input type="password" id="password" 
                  onChange = {( event ) => this.setState ({ password: event.target.value})}/>
              </div><br />
  
              <div className="form-field">
                <label>
                  <input type="checkbox"/>
                  <span>Remember me</span>
                </label>
              </div><br />
  
              <div className="form-field">
                <button className="btn-large waves-effect waves-dark" 
                  style={{width: '100%'}}
                  onClick = {(event) => this.handleClick(event)}>
                  Submit
                </button>
              </div><br />
  
              <span>Already have an account? <a href="/login">Log in</a></span>
  
            </div>
          </div>
        </div>
      </div>
    );
  }


}



export default Signup;