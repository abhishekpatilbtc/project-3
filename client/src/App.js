import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Nav from "./components/Nav/nav";
import Footer from "./components/Footer/footer"

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/User" component={User} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;