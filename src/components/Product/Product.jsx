
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props.product)
    const { img, name, price, seller, ratings } = props.product;
    const addedToCart = props.addedToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4 className='product-name'>{name}</h4>
            <div className='product-info'>
                <p>price: ${price}</p>
                <p>Menufecture: {seller}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
            <button onClick={() => addedToCart(props.product)} className='btn-cart'>
                Add To Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;