// dynamically add elements
// get product details from axios.get (probably add it to actions)
// each element will be able to access a method which pushes item to cart
// each propduct dispatch to store, then the cart will grab what was dispatched and add push it to cart
import React from 'react';

// const axios = require('axios');



// axios.get("http://localhost:9000/product/api/products").then(response => {
//     console.log("Data: ", response.data)
// }).catch(error => {
//     console.log("error", error)
// });


function ProductBox ({data}){
    return (
        <>
            <div className="product">
                <h2 className="product-name">{data.prodName}</h2>
                <p className="product-price">${data.price}</p>
                <p className="product-description">{data.desc}</p>
                <p className="product-rating">Rating: {data.rating} / 5</p>
            </div>
        </>
    )
}

export default ProductBox;
