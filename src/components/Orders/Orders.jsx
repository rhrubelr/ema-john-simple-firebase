import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import './Order.css';
import ReviewItem from '../reviewItem/reviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const saveCart = useLoaderData();
    const [cart, setCart] = useState(saveCart);


    const handlerRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handlerClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    saveCart.map(product =>
                        <ReviewItem
                            key={product.id}
                            product={product}
                            handlerRemoveFromCart={handlerRemoveFromCart}
                        ></ReviewItem>
                    )
                }
            </div>

            <div className='cart-summury'>
                <Cart
                    cart={cart}
                    handlerClearCart={handlerClearCart}
                >
                    <Link to="/CheckOut">
                        <button className='btn-proceed'>Proceed Checkout     
                             <span className='review-icon'>< FontAwesomeIcon className='delete-icon-clear' icon={faArrowRight} /></span>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;