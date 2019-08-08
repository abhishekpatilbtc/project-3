import React, { Component } from "react";
import API from "../../utils/API";
const id = localStorage.getItem('User')



class Friends extends Component {
    state = {
        friends: []
    }

    componentDidMount() {
        console.log(id)
        API.getFriends(id)
        .then(res => {
            const friends = res.data.user.friendsList;
            console.log(res.data.user.friendsList)
            this.setState({friends});
        }).catch(err => console.log(err));

        
    }


    render () {
        return (
            
            <div className="container">
                { this.state.friends.length ?
                    this.state.friends.map((friend, i) => (
                        <div className="col s12 m7" key={i}>
                            <div className="card horizontal">
                                <div className="card-image" style={{padding: '15px'}}>
                                    <img src={friend.image} alt="avatar" style={{borderRadius: '50%', height: '150px', width: '150px'}} />
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
                    : <h4 style={{color: 'gray', margin: 'auto'}}>You don't have any friends yet</h4>
                }
            </div>
        )
    }
}

export default Friends;