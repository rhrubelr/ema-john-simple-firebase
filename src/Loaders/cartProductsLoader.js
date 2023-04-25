import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async() =>{
    const loadProducts = await fetch("products.json")
    const products = await loadProducts.json();

    // if cart data is in database , you have to use async await 
    const storeCart = getShoppingCart();
    const saveCart = [];


    console.log(storeCart)
    for(const id in storeCart){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storeCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);
        }
    }

    // if you need tow things 
    // return [products, saveCart]
    // another option 
    // return { products, cart : saveCart}
    return saveCart;
}
export default cartProductsLoader;