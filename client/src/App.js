import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Nav from "./components/Nav/nav";
import Footer from "./components/Footer/footer";
import Login from "./components/Login/login";
import Signup from "./components/Signup/signup";

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/user" component={User} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;