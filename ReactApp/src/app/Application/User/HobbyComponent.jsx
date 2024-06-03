import React, {Component} from "react";


export default class Hobby extends Component{
    

    constructor(props){
        super(props)
        this.state = {
            hobbyName : props.hobby.hobbyName,
        }
    }

    onTextChange = (evt) => {
        let target = evt.target;
        let classList = target.classList;
        let value = target.value;

        if(classList.contains("hobby")){
            this.setState({hobbyName : value})
        }
    }

    addHobby = (evt) =>{
        let newHobby = this.state;
        alert("New Hobby Created " + JSON.stringify(newHobby))

        this.props.addHobby(newHobby);

        evt.preventDefault();
    }


    render(){

        return(
            <>
                <label>Insert A New Hobby</label>
                <input type="text" placeholder="Insert Hobby Here" className="form-control col-md-6 hobby" value={this.state.hobbyName} onChange={this.onTextChange}/>
                <input type="button" className={"btn btn-primary col-md-2 addHobby"} 
                                    value={"Add Hobby"} 
                                    onClick={this.addHobby}/>
            
            </>
        )
    }
}