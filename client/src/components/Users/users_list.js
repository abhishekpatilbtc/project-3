import React, { Component } from "react";
import "./users_list.css";
import axios from "axios";

class Users_List extends Component {
    state = {
        users: [],
        friends: []
    }

    componentDidMount () {
        axios.get("/api/users")
        .then (res => {
            const users = res.data;
            this.setState({ users });
        })
    }

    handleClick = event => {
        
    }

    render () {
        return (
            <div className="container">
            { 
                this.state.users.map((user, i) => (
                    <div className="col s12 m7" key={i}>
                        <div className="card horizontal">
                            <div className="card-image">
                                <img src={require("./image.png")} alt="avatar" style={{borderRadius: '50%', height: '150px', width: '150px'}} />
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <h5>{user.first} {user.last}</h5>
                                    <p>{user.email}</p>
                                </div>
                                <div className="card-action">
                                    <button className="waves-effect waves-light btn" 
                                    id="add" 
                                    onClick = {(event) => this.handleClick(event)}>Add</button>
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
