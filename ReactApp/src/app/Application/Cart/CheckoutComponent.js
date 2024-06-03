// Checkout Component
// Create A functional component and use react hook or using container to read data from store
// Show - User Details (Name, address) //We will deliver products to below address kind of message as well
// Show Table of cart put up for purchase (you need to re-use the cartlist and cartitem components)
// Show the purchase Summary (total qty and total amount)
// Show a Button to Proceed to Payment
// Integrate this page on CartComponent Button (Go to checkout) -(Go To Checkout From Cart Component)


import React, {useEffect, useRef, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { SaveCartToDB, AddCartToStore, AddToCart } from "../../../state/Cart/cartAction";


let CheckoutHook = (props) => {

    let Cart = useSelector((store) => store.cartReducer.cart);


    let [currentCart, setCart] = useState(Cart)



    let sendElementToCart = (evt, product) => {
        
        console.log(JSON.stringify(product))
        tempCart.cart.push(product)
        setCart(previousCart => [...previousCart, product])

        setAmount(previousAmount => previousAmount+1);
        
        // console.log("Cart Amount:" + cartAmount)
        
        console.log("Adding Product to Cart: " + JSON.stringify(currentCart))
        alert("Added item to Cart: " + product.prodName)

        

        evt.preventDefault();
        
        
    }

    return(
        <>
            <div >
                
                <ul>
                    {currentCart.map((element) => (
                        
                        <div className="product" key={element._id}>
                            <h2 className="product-name">{element.prodName}</h2>
                            <details>
                                <p className="product-price">${element.price}</p>
                                <p className="product-description">{element.desc}</p>
                                <p className="product-rating">Rating: {element.rating} / 5</p>
                            </details>
                            <button onClick={(evt) => sendElementToCart(evt, element)} >Send Item To Cart</button>
                        </div>
                            
                        
                    ))}
                    {/* <button onClick={checkout}>Checkout</button> */}
                </ul>
            </div>
        </>
    )

}

export default CheckoutHook;