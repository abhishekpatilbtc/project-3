import React, { Component } from "react";
<<<<<<< HEAD
// import API from "../../utils/API";
=======
import axios from "axios";
>>>>>>> 266983a7a93aaa524f11b337c2bf77a329a7f9be
const id = localStorage.getItem('User')



class Add extends Component {
  state = {
    image: ''
  }

  handleClick = event => {
    const payload = {
      "image": this.state.image
    }
    axios.post('/api/users/'+ id, payload)
      .then((res) => { 
        console.log(payload)
        console.log(res);
       
      })
      .catch(function (err) {
        console.log(err);
      });
  }


  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="card-action teal lighten-1 white-text" style={{ paddingTop: '0', paddingBottom: '5px' }}>
              <h4>Update Profile Picture</h4>
            </div><br />


            <div className="row">
              <form className="col s12">
                <div className="row">
                <div className="form-field">
                <label htmlFor="username">Image Upload</label>
                <input type="text" id="image" 
                  onChange = {( event ) => this.setState ({ image: event.target.value})}/>
              </div><br />
                </div>
              </form>
            </div>


            <div className="form-field">
              <button className="btn-large waves-effect waves-dark"
                style={{ width: '100%' }}
                onClick={(event) => this.handleClick(event)}>
                Attach an URL
              </button>
            </div><br />

          </div>
        </div>
      </div>
    );
  }

}

export default Add;