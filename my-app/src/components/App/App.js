import React from "react";
import './App.css'
import Home from "../Home/Home";
import AboutMe from "../About Me/AboutMe";
import NavbarReact from "../Navbar/Navbar";
import Resume from '../Resume/Resume'
import Project from "../Projects/Projects"

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "../Footer/Footer";

function App() {
    return (
        <Router>
           <NavbarReact/>
         <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/about" exact component={AboutMe}/>
             <Route path="/resume" exact component={Resume}/>
             <Route path="/project" exact component={Project}/>
         </Switch>
         <Footer/>
        </Router>
    )
}

export default App;