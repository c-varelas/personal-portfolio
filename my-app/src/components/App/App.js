import React from "react";
import './App.css'
import Home from "../Home/Home";
import NavbarReact from "../Navbar/Navbar"

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <NavbarReact />
            <Home/>
            <Switch>
                <Route path="/home" exact component={Home}></Route>
            </Switch>
        </Router>
    )
}

export default App;