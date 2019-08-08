import React, { Component } from "react";
import API from "../../utils/API";
const id = localStorage.getItem('User')



class Add extends Component {
  state = {
    image: ''
  }

  componentDidMount() {
    console.log(id)
    // API.uploadImage(id)
    //   .then(res => {
    //     // const transactions = res.data.user.transactionsList;
    //     console.log(res.data)
    //     // console.log("---------")
    //     // console.log(res.data.user.transactionsList)
    //     // this.setState({ transactions });
    //   }).catch(err => console.log(err));

  }

  render() {
    return (
        <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="card-action teal lighten-1 white-text" style={{paddingTop: '0', paddingBottom: '5px'}}>
              <h4>Update Profile Picture</h4>
            </div><br />
​
​
            {/* <h5 style={{color: 'lightgray'}}>Upload your Image URL</h5> */}
            {/* <nav>
              <div className="nav-wrapper">
                <form>
                  <div className="input-field">
                    <input id="search" type="search" required />
                    <label className="label-icon" htmlFor="search" placeholder="Search to add a new friend"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                  </div>
                </form>
              </div>
            </nav><br /> */}

<div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <textarea id="textarea1" className="materialize-textarea" defaultValue={""} />
              <label htmlFor="textarea1">Link a Image URL</label>
            </div>
          </div>
        </form>
      </div>
​
            {/* <div className="form-field">
              <input type="email" id="email" placeholder="Cannot find who you are looking for? Enter an email to send them an invite" />
            </div><br /> */}
​
            <div className="form-field">
              <button className="btn-large waves-effect waves-dark" 
                style={{width: '100%'}}
                onClick = {(event) => this.handleClick(event)}>
                Attach an URL
              </button>
            </div><br />
​
          </div>
        </div>
      </div>
    );
  }

}

export default Add;