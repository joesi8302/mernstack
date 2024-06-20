import React, { useState, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart, removeItem, updateItem } from "../../../state/Cart/cartAction";
import { Modal, Button, Container, Form } from 'react-bootstrap';
import { AddReviewToProduct, SaveProductToDB, getProduct } from "../../../state/Product/productAction";


let CartOrderComponent = (props) => {
    let item = props.item
    let visible = props.visible
    let dispatch = useDispatch();

    let user = useSelector((store) => store.userReducer.user);

    let Product = useSelector((store)=> store.productReducer.product)
    

    

    

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        dispatch(getProduct(item.prodName))
    };

    const [isVisible, setIsVisible] = useState(false);

    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(5);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        let newReview = {
            userId: user._id,
            rating : rating,
            description : description
        }


        

        dispatch(AddReviewToProduct(newReview))
        

        let newProduct = {
            prodName : Product.prodName,
            price : Product.price,
            desc: Product.desc,
            rating : Product.rating,
            qty : Product.qty,
            reviews : Product.reviews
        }

        console.log("Adding this new product: " +JSON.stringify(Product));
        alert(`Submitted Description: ${description}`);
        // dispatch(SaveProductToDB(newProduct))
    };

    const readForm = (evt) => {

    }


    useEffect( () => {

        return () => {

        }
     }, [isVisible])

    return (
        <>
            
            <td>{item.prodName}</td>
            <td>{item.qty}</td>
            <td>${item.qty*item.price}</td>
                
            
        </>
        
    )

}

export default CartOrderComponent;