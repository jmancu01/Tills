import React, { useState, useEffect, useContext, Fragment } from 'react';
import { CartContext } from '../context/CartContext';
import './CartView.scss';
import {Link} from 'react-router-dom'

function CartView() {
    
    const [cartList, setCartList] = useState([])

    const cart = useContext(CartContext);

    useEffect(() => {

        setCartList(cart.cart)
        cart.getTotalPrice()
    },[cart.cart] )

   
    return (
       
        <Fragment>

            {cartList.length !== 0 ? (
                <div className = 'CartContainer'>
                    {cartList.map( (item) =>
                        <div className = 'ItemContainer'>    
                            <img alt= {item.title} src= {item.image} className ='img'/>
                            <div className ='infoCartContainer'>
                                <h2>{item.title}</h2>
                                <h4>${item.price}</h4>
                            
                                <h4>Estas llevando {item.quantity} {item.title} en tu carrito</h4>
                            </div>
                        </div>      

                    )}
                   
                    <h1 className = 'subtotal'>Subtotal (sin envío) : {cart.totalPrice}</h1>
                  
                    <Link to = '/Register' className = 'button'>Iniciar Compra</Link>  
                </div>
                
                
         
            ) : (
                <div className ='emptyContainer'>
                    <h3>El carrito se encuentra vacio, Puede ver nuestros productos tocando en el boton debajo</h3>  
                    <Link to = '/Products' className = 'button'>MAS</Link>  
                </div>
               
            )
            
            }
            
       </Fragment>
            
    )
    
}
export default CartView