import React, { Component } from "react";
import "./users_list.css";
import axios from "axios";

class Users_List extends Component {
    state = {
        users: [],
    }

    componentDidMount () {
        console.log("mounted")
        axios.get("/api/users")
        .then (res => {
            const users = res.data;
            console.log(res.data)
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
            console.log(res);
        })

    }
    

    render () {
        return (
            <div className="container">
            { 
                this.state.users.map((user, i) => (
                    <div className="col s12 m7" key={i}>
                        <div className="card horizontal">
                            <div className="card-image">
                                <img src={user.image} alt="avatar" style={{borderRadius: '50%', height: '150px', width: '150px'}} />
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <h5>{user.first} {user.last}</h5>
                                    <p>{user.email}</p>
                                </div>
                                <div className="card-action">
                                    <button className="waves-effect waves-light btn" 
                                    id="add" 
                                    onClick = {() => this.handleClick(user)}>Add</button>
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

export default Users_List;
