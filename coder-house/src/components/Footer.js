import React from 'react';
import "./Footer.scss"


function Footer() {

    return (
        <div className = 'footerContainer'>
            <nav className='opciones'>
                <ul>
                    <li><a>Contactanos </a></li>   
                    <li><a href='https://api.whatsapp.com/send?phone=34123456789&text=hola,%20qué%20tal?'> WHATSAPP </a></li> 
                    <li><a> Tel: 2222 15605940</a></li>                     
                   
                </ul>  
                <p>© Derechos Reservados 2001-2020 EspacioLogopedico.com Derechos de Contenido Reservados. </p> 
             </nav>
        </div>
    );
}

export default Footer;