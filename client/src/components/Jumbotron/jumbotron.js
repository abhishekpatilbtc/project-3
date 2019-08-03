import React from "react";
import "./jumbotron.css";

function Jumbotron() {
    return (
        <div>
        <div className="container">
          <div className="card large">
            <figure>
              <img src={require('./money-tree.png')} alt="money tree"/>
            </figure>
            <div id="text">
              <span className="card-title">Goodwill Lending</span>
              <p>Borrow and lend money with a peace of mind</p><br />
              <a className="waves-effect waves-light btn" href="../components/Login/login">Sign up with Facebook</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Jumbotron;