import React, {useEffect, useRef, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { SaveCartToDB, AddCartToStore, AddToCart, getUserCart } from "../../../state/Cart/cartAction";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { ADD_ITEM } from "../../../state/actionTypes";


let ProductDisplayHook = (props) => {
    let Cart = useSelector((store)=> store.cartReducer)
    let user = useSelector((store) => store.userReducer.user)

    let [currentCart, setCart] = useState(Cart)

    const [isVisible, setIsVisible] = useState(false)

    

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
        
        if(!user._id){
            
        }
        else{
            setIsVisible(!isVisible);
        }

       return () => {

       }
    }, [])



    let sendElementToCart = (evt, product) => {
        
        
        dispatch(AddToCart(product));

        
        // console.log("Cart Amount:" + cartAmount)
        
        console.log("Adding Product to Cart: " + JSON.stringify(currentCart))
        alert("Added item to Cart: " + product.prodName + "For User: " + user._id)

        

        evt.preventDefault();
        
        
    }

    

    let checkout = (evt) => {

        let newCart = {
            userId: user._id,
            cart : []
        }
        newCart.cart = currentCart;
        
        console.log(Cart)

        // dispatch(AddCartToStore(newCart))

        // dispatch(SaveCartToDB(newCart))
        

        evt.preventDefault();
    }
    

    return(
        <>
            <div className="productsPage">
                
                <div className="productContainer">
                    {elements.map((element) => (
                        <div key={element._id}>
                            <div className="product" >
                                <h2 className="product-name">{element.prodName}</h2>
                                <details >
                                    <p className="product-price">Price: ${element.price}</p>
                                    <p className="product-description">Description: {element.desc}</p>
                                    <p className="product-rating">Rating: {element.rating} / 5</p>
                                </details>
                            </div>
                            <button className="product-button" onClick={(evt) => sendElementToCart(evt, element)} >Add To Cart</button>
                        </div>
                        
                    ))}
                </div>
                <br></br>
                <button onClick={checkout}>
                        <NavLink to="/checkout"  className="button" activeclassname="true"> Checkout </NavLink>
                </button>
                {isVisible && <div>Checking visibility</div>}
            </div>
        </>
    )
    
}

export default ProductDisplayHook;