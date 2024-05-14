import React , {Component} from "react";
import Home from "./CommonComponent/HomeComponent"
import Footer from "./CommonComponent/FooterComponent"

export default class ApplicationComponent extends Component{
    
    render(){
        let name = "Joe!!!"
        return(
            <div>
                <h4>This is the main react application Component</h4>
                <b>{name}</b>
                <Home/>
                <Footer/>
            </div>
        )
    }
}