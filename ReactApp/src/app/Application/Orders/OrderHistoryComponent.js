import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddOrdersToDB, addToHistory } from "../../../state/Orders/orderAction";
import PreviousOrderComponent from "./PreviousOrderComponent";

let OrderHistoryComponent = (props) => {


    let cart = useSelector((store) => store.cartReducer);
    let user = useSelector((store) => store.userReducer.user);
    let history = useSelector((store) => store.orderReducer.orders);

    let dispatch = useDispatch();

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth()+1;
    let day = today.getDate();
    
    let fomattedDate = `${month}-${day}-${year}`

    let submitOrder = () => {
        let newOrder = {
            userId : user._id,
            orderId : history.orderId,
            order : cart,
            date : fomattedDate,
            status : "In Transit"
        }
        dispatch(addToHistory(newOrder))
    }

    useEffect( () => {

        console.log(JSON.stringify(history))

        return () => {

        }
     }, [history])

    

    let CancelOrder = () => {

    }

    return (
        <>
            <div className="cartPage">
                <table className="cart">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Order Date</th>
                            <th>Status</th>


                        </tr>
                    </thead>
                    <tbody>
                        {history.map((element) => {
                            return <PreviousOrderComponent order={element} readOnly={props.readOnly} key={element.orderId}></PreviousOrderComponent>
                        }

                        )}

                    </tbody>
                    
                    
                </table>
                
                
                
                
            </div>
        
        </>
    )

}

export default OrderHistoryComponent;