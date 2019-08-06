import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectTo: null
    }
  }

  handleClick = event => {
    const payload = {
      "username": this.state.username,
      "password": this.state.password
    }
    axios.post('/login', payload)
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
      console.log("Login successful");
      console.log("$---------$")
      this.props.history.push('/user/'+ res.data.id);
        window.scrollTo(0, 0);
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
                  onChange = {( event ) => this.setState ({ username: event.target.value})}/>
              </div><br />

              <div className="form-field">
                <label htmlFor="username">Password</label>
                <input type="password" id="password" 
                  onChange = {( event ) => this.setState ({ password: event.target.value })}/>
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
                  Log in
                </button>
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