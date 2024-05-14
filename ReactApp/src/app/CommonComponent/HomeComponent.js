import React, {Component, PureComponent} from "react";

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
            userName: "Default"
        }

        this.incrementAgeLoop = null;
        this.incrementAgeVal = 17;
        this.incrementAge();
        
        
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

        this.setState({
            userName: value
        })

        console.log(value)

        evt.preventDefault(); // will be explained later
    }

    updateName = (evt) => {
        console.log("Updating Name")
        this.setState({
            age : this.state.userName
        })
        
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
                            <input type="text" className="form-control textbox" placeholder="Please provide username" value={this.state.userName} onChange={this.onTextChange}>
                            
                            </input>
                        </div>
                        <button className={"form-control btn btn-primary col-md-1"} 
                        onClick={this.updateName} 
                        >Update Name to Age
                        </button>
                        

                    </div>

                </div>
            </>
        )
    }

}



//class component 
//life cycle methods