import React, { Component } from "react";
import API from "../../utils/API";
import Moment from 'react-moment';
const id = localStorage.getItem('User');



class List extends Component {
  state = {
    transactions: [],
    friends: []
  }

  componentDidMount() {
    API.getTransactions(id)
      .then(res => {
        const transactions = res.data.user.transactionsList;
        console.log(res.data.user.transactionsList)
        this.setState({ transactions });
      }).catch(err => console.log(err))
  }
  render() {
    return (
      <ul className="collection">
        {/* <a className="btn-floating btn-small waves-effect waves-light red" href="/add"><i className="material-icons">add</i></a> */}
        {
          this.state.transactions.map((transaction, i) => (
            API.getUser(transaction.userId)
              .then(res => {
                const first = res.data.first;
                const last = res.data.last;
                console.log("Name:"+ res.data.first+" "+res.data.last )
                
              }).catch(err => console.log(err)),
            <li className="collection-item avatar" key={i}>
              <i className="material-icons circle">account_circle</i>
              <p>Friend: {transaction.userId}</p>
              <p>Amout: ${transaction.amount}</p>
              <p>Date: <Moment local format="MM/DD/YYYY">{transaction.date}</Moment></p>
              <p>Transaction ID: {transaction._id}</p>
              {/* <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a> */}
            </li>
          ))
        }
      </ul>
    );
  }

}

export default List;