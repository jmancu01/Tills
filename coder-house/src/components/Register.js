import React, { useContext, useState } from 'react';
import { getFireStore } from '../FireBase/index';
import {CartContext} from '../context/CartContext'

import './Register.css'
import { BuyerContext } from '../context/BuyerContext';

function Register() {
   
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const [rEmail, setREmail] = useState()
    const [phone, setPhone] = useState()
    const [adress, setAdress] = useState()

    const cart = useContext(CartContext).cart
    const buyer = useContext(BuyerContext)

    //check stock and quantity abeilable
    const canBuy = (stock, quantity) =>{

        if(stock >= quantity){
            return true
        } else{
            return false
        }
    }

    const handleSubmit = () =>{

        const db = getFireStore()
        const batch = db.batch()
        //Update sotck
        cart.forEach((element) => {

            const itemSelected = db.collection('items').doc(element.id)

            if(canBuy(element.stock, element.quantity) === true){

                batch.update(itemSelected, { stock: element.stock - element.quantity })
            } else{
                alert(element.title + ' no esta disponible')
            }
           
        });

        batch.commit()
       
        //Cargar la order a firestore
        db.collection('orders').add(
            {
                buyer: {
                    name,
                    surname,
                    adress,
                    email,
                    phone
                },
                cart
            }
        ).then((docRef) => {
            alert('Su numero de pedido es ' + docRef.id)
            //setBuyer
            console.log(buyer)
            buyer.setBuyer(name, surname, email, rEmail, phone, adress, docRef)
           
            }
        ).catch((error) => {
            console.error("Error adding document: ", error);
        })
        

       

    }

    return (
        <div className = 'registerContainer'>
            <h1>Registro</h1>
            <p>Por favor complete todos los campos para poder continuar con la compra</p>
            
            <div className = 'forms'>
                <label for="name"><b>Nombre</b></label>
                <input type="text" placeholder="Ingrese su nombre" onChange = {e => setName(e.target.value)}/>

                <label for="surname"><b>Apellido</b></label>
                <input type="text" placeholder="Ingrese su apellido" onChange = {e => setSurname(e.target.value)}/>

                <label for="email"><b>Correo Electronico</b></label>
                <input type="text" placeholder="Ingrese su correo" onChange = {e => setEmail(e.target.value)}/>

                <label for="email"><b>Repetir Correo Electronico</b></label>
                <input type="text" placeholder="Ingrese nuevamente su correo" onChange = {e => setREmail(e.target.value)}/>

                <label for="phone"><b>Numero de Celular</b></label>
                <input type="text" placeholder="Ingrese su numero de celular" onChange = {e => setPhone(e.target.value)}/>

                <label for="adress"><b>Direccion</b></label>
                <input type="text" placeholder="Ingrese su direccion" onChange = {e => setAdress(e.target.value)}/>

            </div>
           
          

            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
            <button type="submit" className="button" onClick = {handleSubmit} >
               Continuar al pago
                
                
            </button>
        </div>
    )
    
}

export default Register;