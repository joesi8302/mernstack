import {connect} from "react-redux";
import { AddHobbyToStore } from "../../../state/User/userAction";
import HobbyComponent from "./HobbyComponent.jsx";


let mapStateToProps = (store) => {
    console.log("Storing Hobby")
    return {
        hobby : store.hobbyReducer.hobby
    }
}

let mapDispatchProps = (dispatch) => {
    console.log("dispatching hobby")
    return {
        addHobby : (hobby) => {
            dispatch(AddHobbyToStore(hobby))
        }
    }
}

export default connect(mapStateToProps, mapDispatchProps)(HobbyComponent)