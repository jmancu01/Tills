import '../App.css'
import React from 'react';
import logo from '../imagenes/logo.png'

function NavBar() {
    return (
        <div>             
            <nav className='navBar'>
                     
                <li><a href='#'>Sobre Nosotros</a></li>
                <li><a href='#'>Contacto</a></li> 
                <li><a href='#'>Productos</a></li>      
                <li><a href='#'>Inicio</a></li>   
               
                <img src={logo}/>     
                
            </nav>
        </div>
    );
}

export default NavBar;