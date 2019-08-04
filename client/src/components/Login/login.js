import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleClick(event) {
    const apiBaseUrl = "http://localhost:3000/api";
    const payload = {
      "email": this.state.username,
      "password": this.state.password
    }
    axios.post(apiBaseUrl + '/login', payload)
    .then(function (res) {
      console.log(res);
      if (res.data.code === 200) {
        console.log("Login successful");
        const uploadScreen = [];
        uploadScreen.push(<uploadScreen appContext={this.props.appContext}/>)
        this.props.appContext.setState({loginPage: [], uploadScreen: uploadScreen})
      }
      else if (res.data.code === 204) {
        console.log("Username and password do not match");
        alert("Username and password do not match")
      }
      else {
        console.log("Username does not exist");
        alert("Username does not exist");
      }
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
              <h3>Login</h3>
            </div>
            <div className="card-content">

              <div className="form-field">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" 
                  onChange = {( event, newValue ) => this.setState ({ username: newValue})}/>
              </div><br />

              <div className="form-field">
                <label htmlFor="username">Password</label>
                <input type="password" id="password" 
                  onChange = {( event, newValue ) => this.setState ({ password: newValue })}/>
              </div><br />

              <div className="form-field">
                <label>
                  <input type="checkbox"/>
                  <span>Remember me</span>
                </label>
              </div><br />

              <div className="form-field">
                <button className="btn-large waves-effect waves-dark" style={{width: '100%'}}>Log in</button>
              </div><br />

              <span>Don't have an account? <a href="/signup">Sign up</a></span>

            </div>
          </div>
        </div>
      </div>
    );
  }
}




export default Login;