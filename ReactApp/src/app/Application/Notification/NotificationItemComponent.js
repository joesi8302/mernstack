// Static Notifications To Assist User
// 1. To Add Products from Product Screen  (From product screen can put add product later (sends notification)) (saves a to be product)
// 2. To Add Items from Cart Page (add item to wish list (send notification)) (saves product to list) (sends you to individual product page)
// 3. To review cart from Checkout Page (if items are in cart, send go to cart page)
// 4. To Make Payment from Payment Page 
// 5. To Assist Them for cancel/reorder (redirect them to recent orders page (orders have been placed, check status))
// Dynamic Notifications To Assist User (a number changing such as total or number of items in cart)
// 1. To Check the number of items added in the Cart (added item into cart: /current number of items in cart: )
// 2. If user cancels an order it should it should add one notification that an order has been cancelled and add it to notification row

import { NavLink } from "react-router-dom"
import React, {useEffect}  from "react";
import { useDispatch , useSelector} from "react-redux";
import { UpdateNotification } from "../../../state/Notification/notificationAction";


let NotificationItemComponent = (props) => {

    let notification = props.notificaiton;

    let Cart = useSelector((store) => store.cartReducer);

    

    let notificationType = notification.type;
    let description = notification.description

    let gotopage = "/" + notificationType;

    let dispatch = useDispatch();

    let changeStatus = (id) => {

        return () => {
            if(notification.checked == false){
            dispatch(UpdateNotification(id))
            }
        }
        
    }

    useEffect(() => {

        return(() => {

        })
    },[])

    if(notificationType == "checkout"){
        return (
            <NavLink to={gotopage} onClick={changeStatus(notification.id)}>
                <div className="notif">
                    <h5>You have items in Cart</h5>
                    <p>Total Items in cart: {Cart.length}</p> 
                </div>
            </NavLink>
        )
    }
    else{
        return (
        <NavLink to={gotopage} onClick={changeStatus(notification.id)}>
            <div className="notif">
                <h4>{notificationType}</h4>
                <p>{description}</p> 
            </div>
        </NavLink>
    )
    }

    return (<>
        
            <NavLink to={gotopage} onClick={changeStatus(notification.id)}>
                <tr>
                    <td>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <div>
                                            <h4>Description : </h4>
                                            <h5>{description}</h5>
                                        </div>
                                    </th>
                                </tr>
                            
                            </thead>
                        </table>
                    </td>
                    
                </tr>
            </NavLink>
                
    
    </>)
}

export default NotificationItemComponent;