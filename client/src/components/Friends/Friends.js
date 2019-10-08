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
            
            <div className="container" style={{width: '70%', textAlign: 'center'}}>
                { this.state.friends.length ?
                    this.state.friends.map((friend, i) => (
                
                        // <div className="col s6" key={i}>
                            // <div className="card horizontal" key={i} style={{float: 'left', width: '30%', marginLeft: '2.5%'}}>
                            //     <div className="card-image" style={{padding: '15px', width: '40%'}}>
                            //         { friend.image ? 
                            //         <img src={friend.image} alt="avatar" style={{height: '130px', width: '130px'}} />
                            //         :
                            //         <img src={require("./image-square.png")} alt="avatar" style={{height: '120px', width: '120px'}} />}
                            //     </div>
                            //     <div className="card-stacked">
                            //         <div className="card-content">
                            //             <h5>{friend.first} {friend.last}</h5>
                            //             <p>@{friend.username}</p>
                            //         </div>
                            //     </div>
                            // </div>
                        // </div>

                        
                        <div className="col s3" key={i}>
                          <div className="card" style={{float: 'left', width: '24%', margin: '1% 1% 0 0'}}>
                            <div className="card-image"  alt="avatar" style={{width: '140px', margin: 'auto', marginTop: '10px'}}>
                            {friend.image ? 
                              <img alt="avatar" src={friend.image} style={{transform: 'translateY(0%)', width: '140px', height: '140px', borderRadius: '50%', objectFit: 'cover'}}/>
                              :
                              <img alt="avatar" src={require("./image-1.png")} style={{transform: 'translateY(0%)', width: '140px'}}/>}
                            </div>
                            <div className="card-content" style={{padding: '5px'}}>
                              <h6>{friend.first} {friend.last}</h6>
                              <p>@{friend.username}</p><br></br>
                              <p style={{color: 'green', fontWeight: 'bold'}}>Friends ✔</p>
                            </div>
                          </div>
                        </div>
                    
                    ))
                    : <h5 style={{color: 'gray', textAlign: 'center'}}>You don't have any friends yet</h5>
                }
            </div>
        )
    }
}

export default Friends;