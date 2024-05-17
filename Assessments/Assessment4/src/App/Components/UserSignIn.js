import React, {Component} from "react";


export default class UserSignIn extends Component{



    // Creation Life Cycle 1st Step
    constructor(props){
        super(props)

        this.state = {
            username : ""
        }
        this.username = React.createRef();
    }

    onLogin = (evt) => {
        this.username.current.focus();
        let newUsername = this.username.current.value;

        this.setState({
            username : newUsername
        })

    }

    // Creation Life Cycle 3rd Step
    componentDidMount(){

        setTimeout( () => { 
            this.username.current.value = "New username"  
        },5000)

    }

    componentWillUnmount(){  
        
        console.log("Component Will Unmount Was called")
        
    }

    shouldComponentUpdate(nextPops, nextState){
        console.log("nextPops ", nextPops)
        console.log("nextState ", nextState)

        if (this.state.username == nextState.username ) {
            return false 
        } else {
            return true 
        }
    }


    // Creation Life Cycle 2nd Step
    render() {

        return(
            <>
            <div>
                    <form className="form" onSubmit={this.onLogin}>
                        <b>Username </b>
                        <input type="text" placeholder={"Username"} maxLength={20} ref={this.username}></input>
                        <br></br>
                        <b>Password</b>
                        <input type="password" placeholder={"Password"} maxLength={20}></input>

                        <button type="submit" >Login</button>
                    </form>
                </div>
                <div>
                    <h2>Logged in as: {this.state.username}</h2>
                </div>
        </>
        )
        
    }
}