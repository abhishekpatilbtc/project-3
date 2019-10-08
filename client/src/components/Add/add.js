import React, { Component } from "react";
import axios from "axios";
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
      <div className="container" style={{width: '50%'}}>
        <div className="card">
          <div className="card-content">
            <div className="card-action teal lighten-1 white-text" style={{ paddingTop: '0', paddingBottom: '5px' }}>
              <h6>Update Profile Picture</h6>
            </div><br />


            <div className="row">
              <form className="col s12" style={{height: '80px'}}>
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
              <button className="btn waves-effect waves-dark"
                style={{ width: '100%' }}
                onClick={(event) => this.handleClick(event)}>
                Attach a URL
              </button>
            </div><br />

          </div>
        </div>
      </div>
    );
  }

}

export default Add;