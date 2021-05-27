import React, { useState, useEffect, useContext, Fragment } from 'react';
import { CartContext } from '../context/CartContext';
import './CartView.css';
import {Link} from 'react-router-dom'

function CartView() {
    
    const [cartList, setCartList] = useState([])

    const cart = useContext(CartContext);
    useEffect(() => {

        setCartList(cart.cart)
    },[cart.cart] )

   
    return (
       
        <Fragment>

            {cartList.length !== 0 ? (
                <div>
                    {cartList.map( (item) =>
                        <div className = 'CartContainer'>    
                            <img alt= {item.title} src= {item.image} className ='img'/>
                            <div className ='infoCartContainer'>
                                <h3>{item.title}</h3>
                                <h4>${item.price}</h4>
                            
                                <h4>Estas llevando {item.quantity} {item.title} en tu carrito</h4>
                            </div>
                        </div>      
                    )}
                    <Link to = '/Register' className = 'button'>Comprar</Link>  
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