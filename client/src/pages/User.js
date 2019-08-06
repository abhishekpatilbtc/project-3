import React, { Component } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import Card from "../components/Card/card";
import List from "../components/List/list";

// function User() {
//     return (
//         <div className="container" style={{width: '70%'}}>
//             <Card />
//             <List />
//         </div>
//     );
// }

class User extends Component {
    state = {
        user: {},
        friendsList: [],
        loggedIn: false
    };
    // When this component mounts, grab the book with the _id of this.props.match.params.id
    // e.g. localhost:3000/user/5d4755e1a4b1e79d03aee81b
    componentDidMount() {
        this.loadUser();
    }

    loadUser = () => {
        API.getUser(this.props.match.params.id)
            // .then(res => this.setState({ user: res.data }))
            .then(res => this.setState({user: res.data}))
            .catch(err => console.log(err))
    }

    

    render() {
        return (
            <div className="container" style={{ width: '70%' }}>
                <Card 
                    first_name={this.state.user.first} 
                    last_name={this.state.user.last}
                />
                <List />
            </div>
        );
    }
}



export default User;