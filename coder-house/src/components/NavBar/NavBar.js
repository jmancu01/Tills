import './NavBar.css'
import  React,{useContext, useState} from 'react';
import logo from '../../imagenes/logo.png'
import toggle from '../../imagenes/toggle.png'
import CartWidget from './CartWidget'
import { CartContext } from '../../context/CartContext.js';
import {Link} from 'react-router-dom'

function NavBar(props) {

        const productsCount = useContext(CartContext)
        const [isToggle, setToggle]= useState(false)

        const ToggleButon = () =>{
            setToggle(!isToggle)
        }


        return (

        <div>             
            <nav className='navBar'>
                
                <img alt='TillsLogo'src={logo} className='logo'/>   
                <button onClick={() => ToggleButon()} className = 'hide'><img className = 'toggle' src = {toggle}/></button>
                {isToggle ? (
                <nav className='links'>
                    <ul>
                        <li><Link exact to = '/'>Inicio</Link></li>   
                        <li><Link exact to = '/Contact'>Contacto</Link></li> 
                        <li><Link exact to = '/Products'>Productos</Link></li>                     
                        <li><Link exact to = '/About'>Sobre Nosotros</Link></li>
                    </ul>    
                </nav>) : (
                    <h1></h1>
                )
                }     
                <CartWidget className='icon' totalCounter = {productsCount}/>
            </nav>
        </div>
    );
}

export default NavBar;