import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { SaveHobbyToDB } from "../../../state/User/userAction";

let HobbyHook = (props) =>{
    let Hobby = useSelector((store)=>store.hobbyReducer.hobby)

    let [hName, setHobbyName] = useState(Hobby.hobbyName)



    let dispatchToDB = useDispatch();

    let addHobby = (evt) => {
        let newHobby = {
            hobbyName : hName,
        }
        dispatchToDB(SaveHobbyToDB(newHobby))
        evt.preventDefault();
    }

    

    return(
        <>
            <label>Insert A New Hobby</label>
            <input type="text" placeholder="Insert Hobby Here" className="form-control col-md-6 hobby" 
                value={hName} onChange={(evt)=>setHobbyName(evt.target.value)}/>
            <input type="button" className={"btn btn-primary col-md-2 addHobby"} 
                                value={"Add Hobby"} 
                                onClick={addHobby}/>
        
        </>
    )

    
}

export default HobbyHook;