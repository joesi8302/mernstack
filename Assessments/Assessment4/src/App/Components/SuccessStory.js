import React, {Component} from "react";

export default class SuccessStory extends Component{

    constructor(props){
        super(props)
        this.state = {
            name: ""
        }
        

        
    }

    onTextChange = (evt)=>{
        let element = evt.target
        let value = element.value;

        this.setState({
            name: value
        })

        this.props.sendToParent(this.state.name);
    }

    sendToSuccess(){
        this.props.sendToParent(this.state.name);
    }
    



    render(){
        
        return(
                <>
                    <div>
                        <h1>Success Story Component</h1>
                        <h3>VERY HEART WARMING SUCCESS STORY</h3>
                        <p>Type to Success Component</p>
                        <input type="text" value={this.state.name} onChange={this.onTextChange} placeholder="Send for Success"/>
                    </div>
                    
                </>
            )
    }
    
        
        
    
}
