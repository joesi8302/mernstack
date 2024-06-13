import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCartToStore } from "../../../state/Cart/cartAction";
import { AddCoupon } from "../../../state/Coupon/couponAction";


let CouponComponent = (props) => {

    let coupon = useSelector((store => store.couponReducer.value))

   

    let dispatch = useDispatch();

    useEffect( () => {

        return () => {

        }
    }, [])

    let generateCoupon = () =>{
        
        let generatedValue = Math.floor(Math.random() * (1000000));
        
        let value = generatedValue;

        dispatch(AddCoupon(value))
    }


    return (
        <>
            
                <button onClick={generateCoupon}>Generate Coupon</button>
                <div>Generated Coupon: #{coupon}</div>
            
            
            
        </>
    )

}

export default CouponComponent;