import React from "react";

function Add () {
    return (
        <div className="container">
        <div className="card">
          <div className="card-content">
            <h5 style={{color: 'lightgray'}}>Search to add a new friend</h5>
            <nav>
              <div className="nav-wrapper">
                <form>
                  <div className="input-field">
                    <input id="search" type="search" required />
                    <label className="label-icon" htmlFor="search" placeholder="Search to add a new friend"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                  </div>
                </form>
              </div>
            </nav><br />
            <div className="form-field">
              <input type="email" id="email" placeholder="Cannot find who you are looking for? Enter an email to send them an invite" />
            </div><br />
          </div>
        </div>
      </div>
    );
}

export default Add;