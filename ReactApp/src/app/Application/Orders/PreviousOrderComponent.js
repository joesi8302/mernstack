
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from "../../../state/Orders/orderAction";
import { SaveCartToDB, AddCartToStore, AddToCart, getUserCart, emptyCart  } from "../../../state/Cart/cartAction";
import { AddOrdersToDB, addToHistory } from "../../../state/Orders/orderAction"
import { Modal, Button, Container, Form } from 'react-bootstrap';
import { AddReviewToProduct, SaveProductToDB, getProduct } from "../../../state/Product/productAction";
import { AddNotification } from "../../../state/Notification/notificationAction";
import CartOrderComponent from "./CartOrderComponent";



let PreviousOrderComponent = (props) => {

    let order = props.order
    let Cart = useSelector((store) => store.cartReducer);
    let User = useSelector((store) => store.userReducer.user);
    let history = useSelector((store) => store.orderReducer);
    let product = useSelector((store) => store.productReducer.product)
    let notifications = useSelector((store) => store.notificationReducer.notifications)
    
    

    let [orderStatus , setStatus] = useState(order.status);


    

    let dispatch = useDispatch();

    const [isVisible , setIsVisible] = useState(false);

    

    


    useEffect ( () => {

        

        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth()+1;
        let day = today.getDate();
        
        let fomattedDate = `${month}-${day}-${year}`
        let orderMonth = parseInt(order.date.substring(0,1));
        let orderDay = parseInt(order.date.substring(2,4));
        let orderYear = parseInt(order.date.substring(5,9));

        let dayCheck = orderDay - day;
        let monthCheck = orderMonth - month;
        let yearCheck = orderYear - year;

        
        if(dayCheck > 2 || monthCheck > 1 || yearCheck > 1){
            setStatus("Delivered")
            dispatch(updateStatus(order.orderId, "Delivered"))
        }
        else{
            setStatus("In Transit")
            dispatch(updateStatus(order.orderId, "In Transit"))
            setIsVisible(prevVisible => !prevVisible)
        }

        return () => {

        }
    }, [])

    let submitOrder = () => {

        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth()+1;
        let day = today.getDate();
        
        let fomattedDate = `${month}-${day}-${year}`

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
        
    let checkout = () => {

        let newCart = {
            userId : User._id,
            cart : []
        }
        newCart.cart = Cart;
        
        

        // dispatch(AddCartToStore(newCart))
        submitOrder();
        dispatch(SaveCartToDB(newCart))

    }

    let cancelOrder = () =>{
        console.log("Order Canceled")
        setStatus("Canceled")
        dispatch(updateStatus(order.orderId, "Canceled"))

        addNotification();
        
    }

    let addNotification = () => {

        let newNotification = {
            id : "",
            description : "Order Id: " + order.orderId + " has been cancled",
            checked : false,
            type: "orders"
        }

        let notificationId = notifications.length
        newNotification.id = notificationId+1;

        dispatch(AddNotification(newNotification))
    }

    let reOrder = () => {
        dispatch(emptyCart)

        for(const item of order.order){
            let action = AddToCart(item)
            dispatch(action)
        }

        checkout();

    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    let  handleShow = (item) => {
        setShow(true)
        console.log("GETTING PRODUCT TO STORE")
        dispatch(getProduct(item.prodName))
    };



    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(5);

    const handleSubmit = (evt) => {
        

        let newReview = {
            userId: User._id,
            rating : rating,
            description : description
        }


        

        dispatch(AddReviewToProduct(newReview))
        

        let newProduct = {
            prodName : product.prodName,
            price : product.price,
            desc: product.desc,
            rating : product.rating,
            qty : product.qty,
            reviews : product.reviews
            
        }

        newProduct.reviews.push(newReview)

        

        
        alert(`Submitted Review: ${description}`);
        
        console.log("Adding this new product: " +JSON.stringify(product));
        dispatch(SaveProductToDB(newProduct))
        
        

        evt.preventDefault();
    };

    

    return (
        <>
        <tr>
            <td>{order.orderId}</td>
            <td>{order.date}</td>
            <td>{orderStatus}</td>

            
            
            <td>
                <button onClick={reOrder}> Reorder </button>
                {isVisible && <button onClick={cancelOrder}>Cancel</button>}
            </td>
               
        </tr>
        <table >
                <thead>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    
                </thead>
                <tbody>
                    {
                        order.order.map((item) => {
                            return <>
                            
                            <tr>
                                <CartOrderComponent item={item} visible = {!isVisible}></CartOrderComponent>
                                {
                            !isVisible && 

                    <td>
                        {/* <button>Leave a Review</button> */}
                        <Button variant="primary" onClick={() => {handleShow(item)}}>
                            Leave a Review
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>New Review</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Container>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group controlId="formName">
                                            <Form.Label>Rating</Form.Label>
                                            <Form.Control
                                                type="Number"
                                                name="Rating"
                                                value={rating}
                                                onChange={(e) => e.target.value > 5 || e.target.value < 1 ? setRating(5) : setRating(e.target.value)}
                                                max={5}
                                                min={1}
                                                
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formDescription">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={10}
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                placeholder="Enter description here"
                                            />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" >
                                            Submit Review
                                        </Button>
                                    </Form>
                                </Container>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </td>
            
                }
                            </tr>
                            </>
                            
                        })
                    }
                    
                </tbody>
        </table>

        </>
        
        
        
    )
}


export default PreviousOrderComponent;