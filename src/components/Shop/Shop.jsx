
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {

        const storeCart = getShoppingCart();
        const saveCart = [];
        //  step 1
        for (const id in storeCart) {
            // step 2 get the product by using id 
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storeCart[id]
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
            // step 3 get quantity of the product 


        }
        // console.log(storeCart)

    }, [products]);

    const addedToCart = (product) => {

        let newCart = [];


        const exists = cart.find(pd => pd.id === product.id)


        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];

        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id)
            newCart = [...remaining, product]
        }


        setCart(newCart)
        addToDb(product.id)
    }

    const handlerClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            addedToCart={addedToCart}
                        ></Product>)
                }
            </div>

            <div className='cart-summury'>
                <Cart cart={cart}
                    handlerClearCart={handlerClearCart}
                >
                    <Link to='/orders'>
                        <button className='btn-proceed'>Review Oreder
                            <span className='review-icon'>< FontAwesomeIcon className='delete-icon-clear' icon={faArrowRight} />        </span>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;