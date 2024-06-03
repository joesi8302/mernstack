import React, {useEffect, useRef, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { SaveCartToDB, AddCartToStore, AddToCart } from "../../../state/Cart/cartAction";

import axios from "axios";


let CartHook = (props) => {
    let Cart = useSelector((store)=> store.cartReducer.cart)

    let [currentCart, setCart] = useState([])

    let [cartAmount, setAmount] = useState(0)

    
    
    let tempCart = {
        cart : []
    };

    

    let dispatch = useDispatch();

    let [elements, setElements] = useState([]);

    let tempElements = [];

    let productList;

    

    function ProductBox (){
       
        productList.forEach(newElement => {
            console.log("Setting element:", newElement)
            tempElements.push(newElement)
                console.log(tempElements)
            });
            setElements(tempElements)
            
    }

    function fetchProducts(){

        axios.get("http://localhost:9000/product/api/products").then(response => {
            console.log("Data: ", response.data)
            productList = response.data;
            ProductBox();
        }).catch(error => {
            console.log("error", error)
        });
    }

    
    


    useEffect( () => {
        fetchProducts();
        

       return () => {

       }
    }, [])



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

    

    let checkout = (evt) => {

        let newCart = {
            cart : []
        }
        newCart.cart = currentCart;
        
        console.log(currentCart)

        dispatch(AddCartToStore(newCart))

        // dispatch(SaveCartToDB(newCart))

        evt.preventDefault();
    }
    

    return(
        <>
            <div >
                <div >Cart Items: {cartAmount} </div>
                <ul>
                    {elements.map((element) => (
                        
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
                    <button onClick={checkout}>Checkout</button>
                </ul>
            </div>
        </>
    )
    
}

export default CartHook;