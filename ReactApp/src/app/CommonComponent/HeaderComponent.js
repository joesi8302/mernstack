import React from "react";
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux"; // replacement of mapStateToProps

let Header = (props) =>{

    //allow us to read data from store/reducer as we do with mapStateToProps

    const user = useSelector((store)=>store.userReducer.user)
    
    // console.log(user)
    
    const usrName = user && user.userName ? user.userName : props.userName// if user and userName is present, then display userName , else props.Username
    console.log(user)

    return(
        <>
            <h2>Hi {usrName} , Welcome to Shopping Cart sponsored by Tech Team SIT</h2>
            
            <div>
                <NavLink to="/home"  className="button" activeclassname="true"> Home </NavLink>
                <NavLink to="/user"  className="button" activeclassname="true"> Login </NavLink>
                <NavLink to="/about"  className="button" activeclassname="true"> About </NavLink>
                {/* <NavLink to="/about/2500"  className="button" activeclassname="true"> About with Param</NavLink> */}
                <NavLink to="/hobby"  className="button" activeclassname="true"> Hobby </NavLink>
                <NavLink to="/product"  className="button" activeclassname="true"> Product </NavLink>
                <NavLink to="/products"  className="button" activeclassname="true"> Products </NavLink>
                <NavLink to="/checkout"  className="button" activeclassname="true"> Checkout </NavLink>
            </div>
            <hr/>
            
        </>
    )
}

export default Header;