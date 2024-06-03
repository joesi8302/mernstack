import React, {Component} from "react";
import "./app.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import StudentContainer from "./Application/Student/StudentContainer.js";

export default class ApplicationComponent extends Component{

    constructor(props){
        super(props)
    }



    render(){
        return(
            
            <Router>
                <div>
                    <h3>Coming from app</h3>
                    <Routes>
                        <Route path="student" element={<StudentContainer/>}/> 
                    </Routes>
                </div>
                
                
            </Router>
        )
    }
}