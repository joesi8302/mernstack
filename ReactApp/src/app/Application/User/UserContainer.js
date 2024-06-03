// create the connect methods and add that to the component 
//react-redux

import { connect } from "react-redux";
import { AddUserToStore, SaveUserToDB } from "../../../state/User/userAction";
import UserComponent from "./UserComponent.jsx";
// import AdminComponent from "./AdminComponent.jsx";

//mapstatetoprops -- allows component to become subscriber

let globalCondition = "If we need to show an admin login"

let mapStateToProps = (store) => { //store is the redux states
    return {
        user : store.userReducer.user
        // User will be accessed as props.user in this component (Wtihin the constructor)
    }
}

//mapDispatchToProps -- allows us to send data back to store to update in reducer
let mapDispatchProps =  (dispatch) =>{
    return {
        addUser : (user) => {
            dispatch(AddUserToStore(user))
        },
        loginUser : (user)=>{
            dispatch(SaveUserToDB(user))
        }
    }
}

// export default connect(mapStateToProps, mapDispatchProps)(globalCondition ? UserComponent : AdminComponent) // can show 2 different screens depending on login

// Connect accepts - (mapStateToProps - for subscribing) and (mapDispatchProps - for publishing)
export default connect(mapStateToProps, mapDispatchProps)(UserComponent)