import  React, {useState, useEffect, createContext} from 'react';

export const CartContext = createContext([]);


export const CartProvider = ({children}) => {

    const[cart, setCart] = useState([]);
    const[quantity, setQuantity] = useState(0)
    const[totalPrice, setTotalPrice] = useState(0)


    useEffect(() => {

        setQuantity(cart.length)
       

    },[cart])

    const getTotalPrice = () =>{

        let arr = []
        let total = 0;

        for(const product in cart){
            console.log(cart[product])
            const productPrice = cart[product].price * cart[product].quantity
            console.log(cart[product].price)
            arr.push(productPrice)
            // setTotalPrice(productPrice)
            console.log(totalPrice)
        }
        for(var i = 0; i < arr.length; i++){
            total = total + arr[i];
        }

        setTotalPrice(total)
    }

    const addToCart = (product, number) => {
     
        let newProduct = Object.defineProperty(product, 'quantity', {value: number})
        setCart([...cart,  newProduct])
       
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
            totalPrice,
            addToCart,
            clearCart,
            getTotalPrice
            }
        }>
            {children}
        </CartContext.Provider>
        
    );
}

export default CartProvider;