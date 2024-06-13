import React, { useState, Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserCart, removeItem, updateItem } from "../../../state/Cart/cartAction";


let CartItemComponent = (props) => {
    let item = props.item

    

   

    let [Quantity, setQuantity] = useState(item.qty);

    let dispatch = useDispatch();

    useEffect( () => {



        return () => {

        }
     }, [])

    return (
        <tr >
            <td >{item.prodName}</td>
            <td >${item.price}</td>
            <td>
                {
                    props.readOnly ? Quantity : //props.readOnly == true 
                    <input type="text" value={Quantity} onChange={(evt)=>{setQuantity(evt.target.value)}}></input>    
                }
            </td>
            <td>${item.qty*item.price}</td>
            {
                props.readOnly ?  "" : //bydefault false as boolean default is false
                    <Fragment>
                        <td><button onClick={()=>dispatch(removeItem(item._id))}>Remove</button> </td>
                        <td><button onClick={()=>dispatch(updateItem(item._id, Quantity))}>Edit</button></td>
                    </Fragment>
            }
        </tr>
    )

}

export default CartItemComponent;