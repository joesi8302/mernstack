import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from "react"
import NotificationItemComponent from "./NotificationItemComponent";
import { AddNotification } from "../../../state/Notification/notificationAction";

// React Assessment 17-06-2023 - 
// Notifications <Max Mark 10>

// Show notification on top of header (Right Corner)
// Design Should show a circular or any small icon, to show number of notifications
// Upon click it should expand in rectangular box and show all the notification messages 
// All notification messages should be clickable
// Upon click of any of them it should reduce the count in notification icon
// It should have two types of notifications - static and dynamic
// Static Notifications To Assist User
// 1. To Add Products from Product Screen
// 2. To Add Items from Cart Page
// 3. To review cart from Checkout Page
// 4. To Make Payment from Payment Page
// 5. To Assist Them for cancel/reorder
// Dynamic Notifications To Assist User (a number changing such as total or number of items in cart)
// 1. To Check the number of items added in the Cart
// 2. If user cancels an order it should it should add one notification that an order has been cancelled and add it to notification row


let NotificationPageComponent = (props) => {


    let notifications = useSelector((store)=> store.notificationReducer.notifications)
    let Cart = useSelector((store) => store.cartReducer);

    let dispatch = useDispatch();

    let [cartItems, setItems] = useState(Cart.length)


    let addNotification = () => {

        let newNotification = {
            id : "",
            description : "test notification",
            checked : false,
            type: "product"
        }

        let notificationId = notifications.length
        newNotification.id = notificationId+1;

        dispatch(AddNotification(newNotification))
    }

    

   

    useEffect (() =>{


        return () => {

        }
    }, [])

    return (
        <>
            
            <div className="notif-Contain">
                <h2>Notifications</h2>
                <button onClick={addNotification}> Test Notification</button>
                        {notifications.map((notificaitonItem)=>{
                            return (<tr>
                                <NotificationItemComponent notificaiton={notificaitonItem} key={notificaitonItem.id} variable={cartItems.length}></NotificationItemComponent>
                            </tr>)
                        })
                        }


            </div>
        </>
    )

}

export default NotificationPageComponent;