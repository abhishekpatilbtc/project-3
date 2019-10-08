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
            <div className="container" style={{textAlign: 'center'}}>
            { 
                this.state.users.map((user, i) => (

                    // <div className="col s12 m7" key={i}>
                    //     <div className="card horizontal">
                    //         <div className="card-image">
                    //             { user.image ? 
                    //             <img src={user.image} alt="avatar" style={{borderRadius: '50%', height: '150px', width: '150px'}} />
                    //             :
                    //             <img src={require("./image-1.png")} alt="avatar" style={{borderRadius: '50%', height: '150px', width: '150px'}} />}
                    //         </div>
                    //         <div className="card-stacked">
                    //             <div className="card-content">
                    //                 <h5>{user.first} {user.last}</h5>
                    //                 <p>@{user.username}</p>
                    //             </div>
                    //             <div className="card-action">
                    //                 <button className="waves-effect waves-light btn" 
                    //                 id="add" 
                    //                 onClick = {() => this.handleClick(user)}>Add</button>
                    //             </div>
                    //         </div>
                    //     </div>
                    // </div>

                    <div className="col s3" key={i}>
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
                        </div>
                ))
            }
            </div>
        )
    }
}

export default Users_List;
