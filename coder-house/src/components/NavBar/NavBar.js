import './NavBar.css'
import  React,{useContext} from 'react';
import logo from '../../imagenes/logo.png'
import CartWidget from './CartWidget'
import { CartContext } from '../../context/CartContext.js';
import {Link} from 'react-router-dom'

function NavBar(props) {

        const productsCount = useContext(CartContext)

        return (

        <div>             
            <nav className='navBar'>
                <img alt='TillsLogo'src={logo} className='logo'/>   
                <nav className='links'>
                    <ul>
                        <li><Link exact to = '/'>Inicio</Link></li>   
                        <li><Link exact to = '/Contact'>Contacto</Link></li> 
                        <li><Link exact to = '/Products'>Productos</Link></li>                     
                        <li><Link exact to = '/About'>Sobre Nosotros</Link></li>
                    </ul>    
                </nav>
                            
                <CartWidget className='icon' totalCounter = {productsCount}/>
            </nav>
        </div>
    );
}

export default NavBar;