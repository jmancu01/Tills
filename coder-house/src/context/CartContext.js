import  React, {useState, useEffect, createContext} from 'react';

export const CartContext = createContext([]);


export const CartProvider = ({children}) => {

    const[cart, setCart] = useState([]);
    const[quantity, setQuantity] = useState(0)


    useEffect(() => {

        setQuantity(cart.length)

    },[cart])

    const addToCart = (product, number) => {
     
        let newProduct = Object.defineProperty(product, 'quantity', {value: number})
        setCart([...cart,  newProduct])
        console.log(number)
        console.log(newProduct)
    }

    const rmCart = (id) =>{
        cart.slice(
            cart.findIndex((p) => p.id === id)
        )
        setCart([...cart])
    }

    const clearCart = () => {
        setCart([]);
    }

    return(
        <CartContext.Provider value = {
            {
            cart,
            quantity,
            addToCart,
            clearCart
            }
        }>
            {children}
        </CartContext.Provider>
        
    );
}

export default CartProvider;