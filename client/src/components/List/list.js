import React, { Component } from "react";
import API from "../../utils/API";
import Moment from 'react-moment';
const id = localStorage.getItem('User');



class List extends Component {
  state = {
    transactions: [],
    receivers: [],
    senders: []
  }

  componentDidMount() {
    API.getTransactions(id)
      .then(res => 
        {
        const transactions = res.data.user.transactionsList;
        this.setState({ transactions });
      }).catch(err => console.log(err))
  }

  

  render() {
    return (
      <ul className="collection">
        {
          this.state.transactions.map((transaction, i) => (
            
            // API.getUser(transaction.receiver)
            //   .then(res => {
            //     const receiverName = res.data.first + " " + res.data.last;
            //     this.state.receivers.push(receiverName);
            //     console.log("Receivers:" + this.state.receivers)
            //   }).catch(err => console.log(err)),


            // API.getUser(transaction.sender)
            //   .then(response => {
            //     const senderName = response.data.first + " " + response.data.last;
            //     this.state.senders.push(senderName);
            //     console.log("Senders:" + this.state.senders)
            //   }).catch(err => console.log(err)),

            <li className="collection-item avatar" key={i}>
              <i className="material-icons circle">account_circle</i>
              <p>Sender: {transaction.sender}</p>
              <p>Receiver: {transaction.receiver}</p>
              <p>Amount: ${transaction.amount}</p>
              <p>Date: <Moment local format="MM/DD/YYYY">{transaction.date}</Moment></p>
              {/* <p>Transaction ID: {transaction._id}</p> */}
            </li>
          ))
        }
      </ul>
    );
  }

}

export default List;