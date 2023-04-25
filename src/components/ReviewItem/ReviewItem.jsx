import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = ({ product,handlerRemoveFromCart }) => {
    console.log(product)
    const { img, price, name, quantity,id } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='text-yellow'>{price}</span></p>
                <p>Orders Quantity: <span className='text-yellow'>{quantity}</span></p>
            </div>
            <button onClick={() => handlerRemoveFromCart(id)} className='btn-delete'>
                < FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;