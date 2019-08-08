import React, { Component } from "react";
import Autosuggest from 'react-autosuggest';
import API from "../../utils/API";
const id = localStorage.getItem('User');
var friendsArray = [];


API.getFriends(id)
  .then(res => {
    for (var i = 0; i < res.data.user.friendsList.length; i++) {
      // friendsArray.push(res.data.user.friendsList[i].username)
      friendsArray.push(res.data.user.friendsList[i])
    }
  }).catch(err => console.log(err));

console.log("---------")
console.log(friendsArray)
console.log("---------")

//  how to calculate suggestions for any given input value.
const getSuggestions = value => {

  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  return inputLength === 0 ? [] : friendsArray.filter(lang =>
    lang.username.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.username;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.username}
  </div>
);


class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< Updated upstream
      value: '',
      suggestions: []
    }
  }

  //////////
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
=======
      userId: '',
      username: '',
      amount: ''
    }
  }

  componentDidMount() {
    API.getFriends(id)
    .then (res => {
      const friends = res.data.user.friendsList;
      console.log(friends);
    }).catch (err => console.log(err));
  }
  

  handleClick = event => {
    const payload = {
      userId: localStorage.getItem('User'),
      username: this.state.username,
      amount: this.state.amount
    }

    // let id = this.state.userId
    axios.post('/api/transactions/'+ payload.userId, payload)
    .then((res) => {
      console.log(res);
      // redirect to home (user) page
    })
    .catch((err) => {
      console.log(err);
>>>>>>> Stashed changes
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  /////////






  // handleClick = event => {
  //   const payload = {
  //     user: '',
  //     "receiver": this.state.receiver,
  //     "sender": this.state.sender,
  //     "amount": this.state.amount
  //   }
  //   axios.post('/api/transactions', payload)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  render() {

    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search a friend',
      value,
      onChange: this.onChange
    };



<<<<<<< Updated upstream
=======
  render (friends) {
>>>>>>> Stashed changes
    return (
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card">
            <div className="card-content">
              <div className="card-action teal lighten-1 white-text" style={{ paddingTop: '0', paddingBottom: '5px' }}>
                <h4>New Transaction</h4>
              </div><br />
              <div className="form-field">
                <label htmlFor="sum">Friend</label>
                <Autosuggest
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  inputProps={inputProps}
                />
              </div><br />

<<<<<<< Updated upstream
              {/* <div className="form-field" style={{ borderBottom: '1px solid #9e9e9e' }}>
                <label htmlFor="select">Choose a friend</label>

                <select style={{ display: 'unset' }}
                  onChange={(event) => this.setState({ receiver: event.target.textContent })}>
                
                </select>
                

              </div><br /> */}
=======
              <div className="form-field">
                <label htmlFor="sum">Choose a friend</label>
                {/* <input type="text" id="friend" 
                  
                  onChange = {(event) => this.setState ({ username: event.target.value })}/>
              </div><br /> */}
              <Autocomplete suggestions ={friends} />
              </div>
>>>>>>> Stashed changes

              <div className="form-field">
                <label htmlFor="sum">Amount</label>
                <input type="number" id="sum" 
                  onChange = {(event) => this.setState ({ amount: event.target.value })}/>
              </div><br />

              <button className="waves-effect waves-light btn"
                onClick={(event) => this.handleClick(event)}>Log a transaction
              </button>

            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Request;