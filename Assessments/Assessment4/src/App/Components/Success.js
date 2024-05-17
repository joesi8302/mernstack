import React, {Component} from "react";
import SuccessChild from "./SuccessChild";
import SuccessStory from "./SuccessStory";
import UserSignIn from "./UserSignIn";

export default class Success extends Component{

    constructor(props){
        super(props)

        this.state = {
            name : "Mark",
            address : "Somewhere on earth",
            successStory : "",
        }


    }

    getSuccessStory = (value) =>{
        this.setState({
            successStory : value
        })
    }


    
    
    render(){
        return(
            <>
                <div>
                    <h1>Success Component</h1>
                    <h2>"Success is not final, failure is not fatal: it is the courage to continue that counts".</h2>
                    <h2>"Success is the result of perfection, hard work, learning from failure, loyalty, and persistence".</h2>
                    <h2>"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success".</h2>
                    <h2>"Eighty percent of success is showing up".</h2>
                    <h3>Coming From Success Story Value: {this.state.successStory}</h3>
                </div>
                <SuccessChild parentName={this.state.name} parentAddress={this.state.address} successStory={
                <SuccessStory sendToParent={this.getSuccessStory}/>}></SuccessChild>


                

               
                
                

            
            </>
        )
    }

}