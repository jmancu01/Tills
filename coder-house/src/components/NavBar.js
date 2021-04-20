import '../App.css'
import  {React, useState} from 'react';
import logo from '../imagenes/logo.png'
import CartWidget from './CartWidget'

function NavBar() {

    const [user, SetUser] =  useState({user: 'Juan', number: '0'})

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
                            
                <CartWidget user={user}/>
            </nav>
        </div>
    );
}

export default NavBar;