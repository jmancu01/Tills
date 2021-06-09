import React from 'react'
import { Link } from 'react-router-dom';
import cart from '../../imagenes/shopping-cart.png'

import './CartWidget.css';

function CartWidget (props) {

    
    return (
        <div className='cart' >
            <Link to ='/CartView' className='cart-link'>
                <img alt='cart' src={cart} className= 'icon'/>
                <p className= 'cart-quantity'>{props.totalCounter.quantity}</p>  
            </Link>       
            
            
        </div>
    );
}

export default CartWidget;