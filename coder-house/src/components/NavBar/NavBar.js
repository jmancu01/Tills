import './NavBar.css'
import  React,{useContext, useState} from 'react';
import logo from '../../imagenes/logoJM.png'
import toggle from '../../imagenes/toggle.svg'
import CartWidget from './CartWidget'
import { CartContext } from '../../context/CartContext.js';
import {Link} from 'react-router-dom'

function NavBar(props) {

        const productsCount = useContext(CartContext)
        const [isToggle, setIsToggle]= useState(true)
        const [rotate, setRotate] = useState('rotate')

        const ToggleButon = () =>{
            setIsToggle(!isToggle)
            if(rotate === 'rotate'){
                setRotate('not-rot')
            }else{
                setRotate('rotate')
            }    
        }

        return (

        <div>             
            <nav className='navBar'>
                <div className = 'title'>
                    <button onClick={() => ToggleButon()} className = 'hide'><img className = {rotate} src = {toggle}/></button>
                    <img alt='TillsLogo'src={logo} className='logo'/>   
                    <CartWidget className='icon' totalCounter = {productsCount}/>
                </div>
               
                {isToggle ? (
                <nav className='links'>
                    <ul>
                        <li><Link exact to = '/'>Inicio</Link></li>   
                        <li><Link exact to = '/Contact'>Contacto</Link></li> 
                        <li><Link exact to = '/Products'>Productos</Link></li>                     
                       
                    </ul>    
                </nav>) : (
                    <h1></h1>
                )
                }     
           
            </nav>
        </div>
    );
}

export default NavBar;