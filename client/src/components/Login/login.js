import React from "react";

function Login () {
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
                <input type="text" id="username" />
              </div><br />

              <div className="form-field">
                <label htmlFor="username">Password</label>
                <input type="password" id="password" />
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

export default Login;