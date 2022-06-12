import React from 'react';
import "./Footer.scss"


function Footer() {

    return (
        <div className = 'footerContainer'>
            <nav className='opciones'>
                <ul>
                    <li><a>Contactanos </a></li>   
                    <li><a href='https://api.whatsapp.com/send?phone=+54247715605940&text=Hola%20Juan?'> WHATSAPP </a></li> 
                    <li><a> Tel: +54 247715605940</a></li>                     
                   
                </ul>  
                <p>© Derechos Reservados 2001-2020 Juan Cruz Mancuso Micka Derechos de Contenido Reservados. </p> 
             </nav>
        </div>
    );
}

export default Footer;