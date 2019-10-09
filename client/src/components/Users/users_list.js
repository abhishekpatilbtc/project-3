import React, { Component } from "react";
import "./users_list.css";
import axios from "axios";

class Users_List extends Component {
    state = {
        users: [],
        id: localStorage.getItem('User')
    }

    componentDidMount () {
        axios.get("/api/users")
        .then (res => {
            const users = res.data;
            this.setState({ users });
        })
    }

    handleClick = user => {
        const payload = {
            id: localStorage.getItem('User'),
            user
        }
        
        axios.post ('/api/users/addfriend', payload)
        .then((res) => {
            console.log("users!", this.state.users)
        })
    }

    render () {

        return (
            <div className="container" style={{textAlign: 'center'}}>
            { 
                this.state.users.map((user, i) => (
                    <div className="col s3" key={i}>
                        {user._id !== this.state.id && 
                        <div className="card" style={{float: 'left', width: '24%', margin: '1% 1% 0 0', backgroundColor: 'rgba(255,255,255, .9)'}}>
                        <div className="card-image"  alt="avatar" style={{width: '140px', margin: 'auto', marginTop: '10px'}}>
                        {user.image ? 
                            <img alt="avatar" src={user.image} style={{transform: 'translateY(0%)', width: '140px', height: '140px', borderRadius: '50%', objectFit: 'cover'}}/>
                            :
                            <img alt="avatar" src={require("./image-1.png")} style={{transform: 'translateY(0%)', width: '140px'}}/>}
                        </div>
                        <div className="card-content" style={{padding: '5px'}}>
                            <h6>{user.first} {user.last}</h6>
                            <p>@{user.username}</p>
                            <button className="waves-effect waves-light btn-small" 
                                id="add" style={{margin: '10px'}} onClick = {() => this.handleClick(user)}>Add</button>
                        </div>
                        </div>
                        }
                    </div>
                ))
            }
            </div>
        )
    }
}

export default Users_List;
