import React, { Component } from "react";
import axios from "axios";
// import Login from "../Login/login";

class Signup extends Component {
  constructor (props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password: ''
    }
  }

  handleClick(event) {
    const apiBaseUrl = "http://localhost:3001/api";
    const payload = {
      "first": this.state.first_name,
      "last": this.state.last_name,
      "email": this.state.email,
      "username": this.state.username,
      "password": this.state.password
    }
    console.log(payload);
    axios.post(apiBaseUrl + '/register', payload)
    .then(function (res) {
      console.log(res);
      // if (res.data.code === 200) {
      //   console.log ("Registration successfull");
      //   const loginscreen = [];
      //   loginscreen.push(<Login parentContext = {this}/>);
      //   const loginmessage = "Not registered yet. Go to registration";
      //   this.props.parentContext.setState ({ 
      //     loginscreen: loginscreen,
      //     loginmessage: loginmessage,
      //     buttonLabel: "Register",
      //     isLogged: true
      //   });
      // }
    })
    .catch(function (err) {
      console.log(err);
    });
  }

  render () {
    return (
      <div className="row">
        <div className="col s12 m4 offset-m4">
          <div className="card">
            <div className="card-action teal lighten-1 white-text">
              <h3>Sign Up</h3>
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