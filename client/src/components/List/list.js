import React, { Component } from "react";
import API from "../../utils/API";
import Moment from 'react-moment';
const id = localStorage.getItem('User')


class List extends Component {
  state = {
    transactions: []
  }

  componentDidMount() {
    console.log(id)
    API.getTransactions(id)
      .then(res => {
        const transactions = res.data.user.transactionsList;
        console.log(res.data)
        console.log("---------")
        console.log(res.data.user.transactionsList)
        this.setState({ transactions });
      }).catch(err => console.log(err));

  }

  render() {
    return (
      <ul className="collection">
        <a className="btn-floating btn-small waves-effect waves-light red" href="/add"><i className="material-icons">add</i></a>
        {
          this.state.transactions.map((transaction, i) => (
            <li className="collection-item avatar" key={i}>
              <i className="material-icons circle">account_circle</i>
              <span className="title">Transaction ID: {transaction._id}</span>
              <p>Amount: ${transaction.amount}</p>
              <p>Date: <Moment local>{transaction.date}</Moment></p>
              <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
          ))
        }
      </ul>
    );
  }

}

export default List;