import React from "react";
import {useParams, useNavigate} from "react-router-dom"





let SuccessChild = (props) =>{
    
    

    return(
        <div>
            <h1>Success Child Component</h1>
            <h2>Name: {props.parentName}</h2>
            <h2>Address: {props.parentAddress}</h2>
            <div>
                {props.successStory}
            </div>
        </div>
        
    )
}

export default SuccessChild;