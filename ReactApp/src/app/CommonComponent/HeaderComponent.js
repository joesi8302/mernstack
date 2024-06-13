import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux"; // replacement of mapStateToProps

let Header = (props) =>{

    //allow us to read data from store/reducer as we do with mapStateToProps

    const user = useSelector((store)=>store.userReducer.user)
    
    // console.log(user)

    const [isVisible , setIsVisible] = useState(false);


    

    useEffect( () => {
        
        if(!user._id){
                            
        }
        else{
            setIsVisible(prevVisible => !prevVisible);
        }
        return () => {

        }
    },[user])
    
    

    
    const usrName = user && user.userName ? user.userName : props.userName// if user and userName is present, then display userName , else props.Username
    console.log(user)

    return(
        <>
            {!isVisible && <div><h2>Please Login</h2></div>}
            {isVisible && <div><h2>Hi {usrName} , Welcome to Shopping Cart sponsored by Tech Team SIT</h2></div>}
            <div>
                <NavLink to="/home"  className="button" activeclassname="true"> Home </NavLink>
                <NavLink to="/user"  className="button" activeclassname="true"> Login </NavLink>
                <NavLink to="/about"  className="button" activeclassname="true"> About </NavLink>
                {/* <NavLink to="/about/2500"  className="button" activeclassname="true"> About with Param</NavLink> */}
                
                {
                    isVisible &&
                    <Fragment>
                        <NavLink to="/hobby"  className="button" activeclassname="true"> Hobby </NavLink>
                        <NavLink to="/product"  className="button" activeclassname="true"> Product </NavLink>
                        <NavLink to="/products"  className="button" activeclassname="true"> Products </NavLink>
                        <NavLink to="/coupon" className="button" activeclassname="true">Coupon</NavLink>
                    </Fragment>
                }
                   
                
                    
                    
                
                
            </div>
            <hr/>
            
        </>
    )
}

export default Header;