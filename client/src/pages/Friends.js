import React, { Component } from "react";
import API from "../utils/API"


// API.getFriends(localStorage.getItem('User'))
// .then(res => console.log(res.data.user.friendsList))
// .catch(err => console.log(err));

class Friends extends Component {
    state = {
        friends: [],
    }

    componentDidMount () {
        this.loadFriends();
    }

    loadFriends = () => {
     
        API.getFriends(localStorage.getItem('User'))
        // .then(res => this.setState({friends: res.data}))
        .then(res => this.setState({ friends: res.data.user.friendsList }))
        .catch(err => console.log(err));
    }
        
    render () {
        return (
            <div className="container">
                {
                    this.state.friends.map((friend, i) => (
                        <div className="col s12 m7" key={i}>
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src={require("../components/Users/image.png")} alt="avatar" style={{borderRadius: '50%', height: '150px', width: '150px'}} />
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <h5>{friend.first} {friend.last}</h5>
                                        <p>{friend.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }


}

export default Friends;