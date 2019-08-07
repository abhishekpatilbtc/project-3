import React from "react";

function Add () {
    return (
        <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="card-action teal lighten-1 white-text" style={{paddingTop: '0', paddingBottom: '5px'}}>
              <h4>Add a Friend</h4>
            </div><br />


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

            {/* <div className="form-field">
              <input type="email" id="email" placeholder="Cannot find who you are looking for? Enter an email to send them an invite" />
            </div><br /> */}

            <div className="form-field">
              <button className="btn-large waves-effect waves-dark" 
                style={{width: '100%'}}
                onClick = {(event) => this.handleClick(event)}>
                Log in
              </button>
            </div><br />

          </div>
        </div>
      </div>
    );
}

export default Add;