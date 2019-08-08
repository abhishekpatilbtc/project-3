import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Moment from 'react-moment';
import 'moment-timezone';
import Home from "./pages/Home";
import User from "./pages/User";
import Nav from "./components/Nav/nav";
import Footer from "./components/Footer/footer";
import Login from "./components/Login/login";
import Signup from "./components/Signup/signup";
import Add from "./components/Add/add";
import Request from "./components/Request_Send/request_send";
import Users from "./components/Users/users_list";
import Friends from "./components/Friends/Friends";

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/user/:id" component={User} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/add" component={Add} />
                    <Route exact path="/request" component={Request} />
                    <Route exact path="/userlist" component={Users} />
                    <Route exact path="/friends" component={Friends} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;