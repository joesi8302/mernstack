import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

let NotificationHeaderComponent = (props) => {

    let notifications = useSelector((store) => store.notificationReducer.notifications)

    let [notificationCounter, setCounter] = useState( () => notifications.filter(notification => notification.checked === false).length);
     

    useEffect( () => {
        let count = notifications.filter(notification => notification.checked === false).length
        
        setCounter(count);

    },[notifications])

    return (
        <>
            <NavLink to="/notifications" className= "" style={{}}>
                <div className="notification-container">
                    <div className="notification-bell">
                        <span className="bell-icon">&#128276;</span>
                        <span className="notification-count">{notificationCounter}</span>
                    </div>
                </div>
            </NavLink>
            
        </>
    )

}

export default NotificationHeaderComponent;