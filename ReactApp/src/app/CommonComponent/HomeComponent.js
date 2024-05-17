import React, {Component, PureComponent} from "react";
import { Form } from "react-router-dom";
import {PropTypes} from "prop-types";

//this component implements shouldComponentUpdate in itself to reduce the render on state change
export default class Home extends PureComponent{
    // export default class Home extends Component{
    // PureComponent or Regular Component?
            // Use Pure when you don't know how many comparisons and check you need
            // If you do know that only a few need to be checked, then can just use Component

    //Creation life cycle method  ( Creation life cycle 1st Step)
    constructor(props){
        super(props)

        this.state = {
            age: 17,
            userName: props.parentName,
            refAddress : "Somewhere on earth",
            refAge : "Infinity"
        }

        this.incrementAgeLoop = null;
        this.incrementAgeVal = 17;
        // this.incrementAge();
        
        // to access and update the html directly
        this.address = React.createRef() // this creates a reference which we can link to the html, then access it
        this.age = React.createRef()

    }

    // SetInterval executes the code within and continuously executes (Continuouse Loop until clearInterval is executed)
    // ClearInterval will stop the execution
    incrementAge = () =>{
        this.incrementAgeLoop = setInterval(()=>{
            this.incrementAgeVal++
            this.setState({
                age: this.state.age +1
            })
        },2000) // runs every 2 seconds forever

         // ClearInterval will stop the execution
        // setTimeout( () => { 
        //     clearInterval(this.incrementAgeLoop)
        // },5000)
        
        
    }


    //html is rendered on browser, executes only after first render ( Creation life cycle 3rd step)
    componentDidMount(){
        // Here we can access the html and make calls to server API here to pull the data

        setTimeout( () => { 
            this.address.current.value = "New name with reference"  // Here we are directly affecting the html, however, it will not be saved after leaving that page
        },5000)

    }


    //Destruction life cycle method
    componentWillUnmount(){  
        // any api subscriptions, loops should be stopped here as this data may create a mess
        
        clearInterval(this.incrementAgeLoop)
        console.log("Component Will Unmount Was called")
        

        //NEED TO LOOK AT RECORDING TO SEE THE UNMOUNTING / DESTRUCTION PART
    }


    // evt - is a JS object which contains informatiuon about the control which invoked this event
    onTextChange = (evt) =>{

        let element = evt.target

        let value = element.value;

        let classList = element.classList; // gives the list of classes in the CSS element
        if(classList.contains("userName")){
            // regex to check the email
            // value == valid email
            this.setState({

                userName: value
            })
        }
        else{
            // regex to check the number
            let newVal = value < 110 ? value : 0
            this.setState({
                age : newVal
            })
        }


        // update the name back in parent by calling callback event
        this.props.updateNameInParent(value) //sending data back to parent
        // This connects to the route in the parent class

        console.log(value)

        evt.preventDefault(); // will be explained later
    }

    updateName = (evt) => {
        console.log("Updating Name")

        // This set state follows the lifecycle methods and updates the states in batch process 
        this.setState({
            age : this.state.userName
        })


        /////////////////////////////////////////ANOTHER WAY TO CHANGE THINGS ON A WEB PAGE//////////////////////////////////////////////////////////
        // not a reccomended way but can call the render method after state update
        // it skips the life cyucle methods like - shouldComponentUpdate

        // this.state.age = this.state.userName // This way does not create a virtual dom which can update the webpage
        // this.forceUpdate(); // directly calls the render method to create a virtual dom
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        evt.preventDefault();
        
    }

    // Do not need to implement this Step if your component is a PureComponent
    //update life cycle methods
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("nextProps", nextProps)
    //     console.log("nextState", nextState)

    //     if(this.state.age == nextState.userName){
    //         return false // this means it should not call render method to create virtual dom
    //     }
    //     else{
    //         return true // will render the page again
    //     }
    // }

    getSnapshotBeforeUpdate(prevState, prevProps){
        console.log("getSnapshotBeforeUpdate");
        console.log("prevState", prevState);
        console.log("prevProps", prevProps);
        return {
            prevState,
            prevProps
        }
    }

    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate");
        console.log("prevState",prevState);
        console.log("prevProps", prevProps);

        // this.setState({
        //     uState : prevState.uState
        // })
    }



    // Uncontrolled Way of Data Submission
    formSubmit = (evt) =>{
        this.address.current.focus();
        let newAdd = this.address.current.value;
        let newAge = this.age.current.value
        // alert(newAdd + newAge)

        this.setState({
            refAge : newAge,
            refAddress : newAdd
        })
        
        //default behavior of form is to submit but we can stop that by using evt.preventDefault
        evt.preventDefault();
    }


    // create and update the virtual DOM   (Creation life cycle 2nd Step)
    render(){
        console.log("Render Method is called")
        return(
            <>
                <h1>Home Component</h1>
                <h2>User Age is {this.state.age}</h2>

                {/* Controlled way of creating components - state directly couple with changes */}
                <div className="form col-md-12">
                    <div className="form-control">
                        <div className="col-md-3">
                            <b>User Name</b>
                        </div>
                        <div className="col-md-7">
                            <input type="text" className="form-control textbox userName" placeholder="Please provide username" 
                            value={this.state.userName} onChange={this.onTextChange}></input>
                            <input type="text" className="form-control textbox userAge" placeholder="Please provide user age" 
                            value={this.state.age} onChange={this.onTextChange}></input>
                        </div>
                        <button className={"form-control btn btn-primary col-md-1"} 
                        onClick={this.updateName} 
                        >Update Name to Age
                        </button>
                        

                    </div>
                    {this.props.footer}
                    {/* uncontrolled component using reference element */}
                    {/* <input type="text" ref={this.address}></input> */}
                    {/* These are uncontrolled because it is not attached to the state */}
                    <form className="form" action="api/loginuser" method="post" onSubmit={this.formSubmit}>
                        <b>Address (Uncontrolled Component)</b>
                        <input type="text" placeholder={"Default User Address"} 
                            ref={this.address} maxLength={20}></input>
                        <b>Age</b>
                        <input type="text" placeholder={"Default User Age"} 
                            ref={this.age} maxLength={20}></input>


                        <button type="submit" >Save</button>
                    </form>
                    <label>RefAddress: {this.state.refAddress}</label>
                    <br></br>
                    <label>RefAge: {this.state.refAge}</label>
                </div>
            </>
        )
    }

}

// Home.defaultProps = {
//     parentName: "Joe Si"
// }

Home.propTypes = {
    parentName : PropTypes.string.isRequired
}

//class component 
//life cycle methods



// NEED TO REWATCH THE LAST 15 MINUTES OF THE SESSION