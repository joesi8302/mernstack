import React , {Component} from "react";
import "../app.css"

export default class TestComponent extends Component{
    
    render(){
        return(
            <div className="topdiv2">
                <h1>MY COMPONENT</h1>
                <img className="patty" src="https://images.genius.com/c6364c3f692c894edff6efbc16aa8f63.300x300x1.jpg" alt="Patty" width="500" height="600"></img>
                <form>
                    <div className="col-md-12">
                        <label className="col-md-4">User Name</label>
                        <input className="col-md-6" type="text" maxLength={14} placeholder="please type here..."></input>
                        <hr/>
                        <input className="col-md-6" type="email" maxLength={14} placeholder="please type email here..."></input>
                        <hr/>
                        <input className="col-md-6" type="tel" maxLength={14} placeholder="please type telephone here..."></input>
                        <hr/>
                        <input className="col-md-6" type="date" maxLength={14} placeholder="please add date here..."></input>
                        <hr/>
                        <input className="col-md-6" type="checkbox" maxLength={14} placeholder="please check here..."></input>
                        <hr/>
                        <input className="col-md-6" type="color" maxLength={14} placeholder="please check here..."></input>
                        <hr/>
                        <input type="submit"></input>
                    </div>
                </form>
            </div>
        )
    }
}