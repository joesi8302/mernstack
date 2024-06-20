// action: an object with two properties:
        // type:
        // payload:

import { getUserCart } from "../Cart/cartAction";
import { GetUserOrders } from "../Orders/orderAction";
import * as actionTypes from "../actionTypes";
import axios from "axios";


export const AddUserToStore = (user) => {
    return {
        type: actionTypes.ADD_USER_TO_STORE,  //actionType to be matched in user Reducer
        payload: user // payload which will update the user state
    }
}

export const AddHobbyToStore = (hobby) => {
    return {
        type: actionTypes.ADD_HOBBY_TO_STORE,
        payload : hobby
    }
}

//server call
//to save user to mongo db and do sign-in or sign up
export const SaveUserToDB = (newUser)=>{
    return (dispatch)=>{
        axios.post("http://localhost:9000/user/api/signinup",//uri or end point of singninup api
                newUser // the user state object we dispatch from the user component
            ).then((collection)=>{
                let loggedUser = collection.data
                console.log(loggedUser)
                dispatch(AddUserToStore(loggedUser))
                
            }).catch((err)=>{
                console.log("error while logging in ", err)
        })
    }
}

export const SaveHobbyToDB = (newHobby) =>{
    return (dispatch) => {
        axios.post("http://localhost:9000/hobby/api/addhobby",
            newHobby
            ).then((collection) => {
                let addedHobby = collection.data
                console.log(addedHobby)
                dispatch(AddHobbyToStore(addedHobby))
            }).catch((err) =>{
                console.log("error adding hobby", err)
            })
    }
}



export const SaveUserToDBUsingFetch = (newUser)=>{
    return (dispatch)=>{
        window.fetch("http://localhost:9000/user/api/signinup",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)})
            .then((response)=>response.json())
            .then((userData)=>{
                console.log(userData)
                dispatch(AddUserToStore(userData))
                console.log("getting cart for user: " + userData._id)
                dispatch(getUserCart(userData._id))
                dispatch(GetUserOrders(userData._id))
            }).catch((err)=>{
                console.log("error while logging in ", err)
        })
    }
}