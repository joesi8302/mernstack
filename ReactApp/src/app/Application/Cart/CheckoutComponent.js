// Checkout Component
// Create A functional component and use react hook or using container to read data from store
// Show - User Details (Name, address) //We will deliver products to below address kind of message as well
// Show Table of cart put up for purchase (you need to re-use the cartlist and cartitem components)
// Show the purchase Summary (total qty and total amount)
// Show a Button to Proceed to Payment
// Integrate this page on CartComponent Button (Go to checkout) -(Go To Checkout From Cart Component)


import React, {useEffect, useRef, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { SaveCartToDB, AddCartToStore, AddToCart, getUserCart } from "../../../state/Cart/cartAction";
import { AddOrdersToDB, addToHistory } from "../../../state/Orders/orderAction"
import CartItemComponent from "./CartItemComponent";
import CartSummary from "./CartSummary";


let CheckoutHook = (props) => {

    let Cart = useSelector((store) => store.cartReducer);
    let User = useSelector((store) => store.userReducer.user);
    let history = useSelector((store) => store.orderReducer);

    let [currentCart, setCart] = useState([])
    let [cartTotal, setCartTotal] = useState(0);

    let dispatch = useDispatch();

    
    let price = 0;
    useEffect(()=>{
        
        
    })
    
    Cart.forEach(element => {
        
        price = price+(element.price*element.qty);    
    });
    
    let recalculate = (cartItems) => {
        let amount = 0;
        let count = 0;

        for(let item of cartItems){
            amount += item.qty * item.price;
            count += item.qty
        }

        return {
            amount,
            count
        }
    }

    

    

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth()+1;
    let day = today.getDate();
    
    let fomattedDate = `${month}-${day}-${year}`

    let submitOrder = () => {
        let newOrder = {
            userId : User._id,
            orderId : history.orderId,
            order : Cart,
            date : fomattedDate,
            status : "default"
        }
        dispatch(addToHistory(newOrder))


        let orders = {
            userId: User._id,
            orders : history.orders
        }
        orders.orders.push(newOrder);

        dispatch(AddOrdersToDB(orders))
    }
        
    let checkout = (evt) => {

        let newCart = {
            userId : User._id,
            cart : []
        }
        newCart.cart = Cart;
        
        console.log(currentCart)

        // dispatch(AddCartToStore(newCart))
        submitOrder();
        dispatch(SaveCartToDB(newCart))

        evt.preventDefault();
    }

    return(
        <>
            <div className="cartPage">
                <table className="cart">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove Item</th>
                            <th>Update Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Cart.map((element) => {
                            return <CartItemComponent item={element} readOnly={props.readOnly} key={element._id}></CartItemComponent>
                        }

                        )}
                    </tbody>
                    
                    
                </table>
                <div>
                    <CartSummary data={recalculate(Cart)} readOnly={props.readOnly}> </CartSummary>
                
                    <button onClick={checkout}>Order</button>
                </div>
                
                
                
            </div>
        </>
    )

}

export default CheckoutHook;