import '../App.css'
import  {React, useState} from 'react';
import logo from '../imagenes/logo.png'
import CartWidget from './CartWidget'

function NavBar(props) {

    

    return (


        <div>             
            <nav className='navBar'>
                <img src={logo}/>   
                <nav className='links'>
                    <ul>
                        <li><a href=''>Inicio</a></li>   
                        <li><a href='Contacto'>Contacto</a></li> 
                        <li><a href='Productos'>Productos</a></li>                     
                        <li><a href='Sobre Nosotros'>Sobre Nosotros</a></li>
                    </ul>    
                </nav>
                            
                <CartWidget totalCounter = {props.totalCounter}/>
            </nav>
        </div>
    );
}

export default NavBar;