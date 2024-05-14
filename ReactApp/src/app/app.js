import React , {Component} from "react";
import "./app.css"
import "./app1.css"
// import TestComponent from "./CommonComponent/test";
import Home from "./CommonComponent/HomeComponent"
import Footer from "./CommonComponent/FooterComponent"
import Header from "./CommonComponent/HeaderComponent"
import About from "./CommonComponent/AboutComponent"
import NotFound from "./CommonComponent/NotFoundComponent";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

export default class ApplicationComponent extends Component{

    //props - is the set of properties html + js which needs to be available in every component
        // also, a parent component can share data to child using props

    constructor(props){
        super(props); // This syncs the props values to parent/base class

        //define the state and initialize the state
        this.state = {
            name: "Joe!!!",
            name2: "ANOTHER"
        }
    }

    updateName = (evt)=>{

        alert("Name is UPDATING")
        ////////////////////////////////////////////////////////////////
        // DO NOT DO THIS WAY TO CHANGE NAME
        // let nameElem = document.getElementById("name_element")
        // nameElem.innerText = "yao"
        // evt.preventDefault()
        //////////////////////////////////////////////////////////////////
        
        //update state to create new virtual dom using setState - API

        this.setState({
            name: "David",
            name2: "ANOTHER"
        })

        // this.state.name = "asd"
        // console.log(this.state.name)

        evt.preventDefault()
    }
    
    render(){
        // let name = "Joe!!!"
        return(
            
            // <div className="topdiv">
            //     <h4>This is the main react application Component</h4>
            //     <b id="name_element">{this.state.name}</b>

            //     <button onClick={this.updateName}>Update Name</button>

            //     {/* <Home/>
            //     <Footer/>
            //     <TestComponent></TestComponent> */}
                
            //     <Header/>
            //     {/* <Home parentName={this.state.name}/> */}
            //     <About/>
            //     <Footer/>

                
            // </div>
            <Router>
                <div className="topdiv">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home  parentName={this.state.name}/>}/>
                    <Route path="home" element={<Home  parentName={this.state.name2}/>}/>
                    <Route path="about" element={<About />}/>
                    <Route path="about/:id" element={<About />}/>
                    <Route path="*" element={<NotFound />}/>                    
                </Routes>
                <Footer/> 
                </div>
            </Router>

        )
    }
}