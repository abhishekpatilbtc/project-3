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
              {/* <span className="card-title">Goodwill Lending</span> */}
              <h2>Equity</h2>
              <p style={{fontSize: '20px'}}>Borrow and lend money</p>
              <p style={{fontSize: '20px'}}>with a peace of mind</p>
              <br />
              <a className="waves-effect waves-light btn" href="/signup">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Jumbotron;