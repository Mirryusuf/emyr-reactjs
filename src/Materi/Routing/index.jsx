import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from "./Menu";
import Home from "./Home";
import Skills from "./Skills";
import Contact from "./Contact";


function AppP (){
    return(
        <>
        <Navigation />   
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <Skills />
                </Route>
                <Route path="/contact">
                    <Contact /> 
                </Route>
            </Switch>
        </Router>     
        </>
    )
}
export default AppP;