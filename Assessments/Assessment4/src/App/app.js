import React, {Component} from "react";
import "./app.css";
import Success from "./Components/Success";
import SuccessChild from "./Components/SuccessChild";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserSignIn from "./Components/UserSignIn";

export default class AppComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            name : "HJel"
        }
    }

    render(){
        return(
            
            <Router>
                <Routes>
                    <Route path = "/" element = {<Success></Success>}/>
                </Routes>

                <UserSignIn></UserSignIn>
                
            </Router>
        )
    }
}