import React from "react";

function Signup () {
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
                <input type="text" id="firstname" />
                </div><br />
              </div>
              <div className="col s6">
                <div className="form-field">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" />
                </div><br />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div><br />

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
              <button className="btn-large waves-effect waves-dark" style={{width: '100%'}}>Submit</button>
            </div><br />

            <span>Already have an account? <a href="/login">Log in</a></span>

          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Signup;