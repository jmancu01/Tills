import './NavBar.css'
import  {React } from 'react';
import logo from '../../imagenes/logo.png'
import CartWidget from './CartWidget'

function NavBar(props) {

       return (

        <div>             
            <nav className='navBar'>
                <img alt='TillsLogo'src={logo} className='logo'/>   
                <nav className='links'>
                    <ul>
                        <li><a href='../'>Inicio</a></li>   
                        <li><a href='Contact'>Contacto</a></li> 
                        <li><a href='Products'>Productos</a></li>                     
                        <li><a href='Sobre Nosotros'>Sobre Nosotros</a></li>
                    </ul>    
                </nav>
                            
                <CartWidget className='icon' totalCounter = {props.totalCounter}/>
            </nav>
        </div>
    );
}

export default NavBar;