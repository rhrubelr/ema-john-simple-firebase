import React from 'react';
import "./Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const Cart = ({ cart,handlerClearCart,children }) => {
    // const {cart} = props; option 1

    // console.log(cart);
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = total * 7 / 100;

    const garndTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h3>Order summury</h3>
            <h4>Selected Item: {quantity}</h4>
            <h4>Total price: ${total} </h4>
            <h4>Shipping Chrage: ${totalShipping}</h4>
            <h4>Tax: ${tax}</h4>
            <h4>Grand Total: {garndTotal}</h4>
            <button onClick={handlerClearCart} className='btn-clear-cart'>
                <span>Clear Cart</span>
                < FontAwesomeIcon className='delete-icon-clear' icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Cart;