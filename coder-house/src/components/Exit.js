import React, { useContext } from 'react';
import { BuyerContext } from '../context/BuyerContext';


function Footer() {

    const buyer = useContext(BuyerContext)

    console.log(buyer)
    return (
        <div >
           <h1>Gracias por su compra</h1>
           <h3>Su numero de Id es {buyer.orderid}</h3>
        </div>
    );
}

export default Footer;