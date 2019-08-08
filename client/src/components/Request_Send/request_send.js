import React, { Component } from "react";
import axios from "axios";

class Request extends Component {
  constructor (props) {
    super (props);
    this.state = {
      user: '',
      receiver: '',
      sender: '',
      amount: ''
    }
  }

  handleClick = event => {
    const payload = {
      user: '',
      "receiver": this.state.receiver,
      "sender": this.state.sender,
      "amount": this.state.amount
    }
    axios.post('/api/transactions', payload)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render () {
    return (
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card">
            <div className="card-content">
              <div className="card-action teal lighten-1 white-text" style={{paddingTop: '0', paddingBottom: '5px'}}>
                <h4>New Transaction</h4>
              </div><br />

              <div className="form-field" style={{borderBottom: '1px solid #9e9e9e'}}>
                <label htmlFor="select">Choose a friend</label>

                <select style={{display: 'unset'}}
                  onChange = {( event ) => this.setState ({ receiver: event.target.textContent })}>
                  <option defaultValue />
                  <option value={1}>Aunt Meredith</option>
                  <option value={2}>Bob from work</option>
                  <option value={3}>Uncle Anirudh</option>
                  <option value={4}>Becky</option>
                </select>
                
              </div><br />

              <div className="form-field">
                <label htmlFor="sum">Amount</label>
                <input type="number" id="sum" />
              </div><br />

              <button className="waves-effect waves-light btn"
                onClick = {(event) => this.handleClick(event)}>Log a transaction
              </button>

            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Request;