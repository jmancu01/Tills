import React, { useContext, useState } from 'react';
import './Contacto.css'


function Contacto() {
   
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()


    const submitHandle = () => {
        //puede ser usada para retroalimentacion
        console.log('informacion guardada como ', name, surname, email, message);
    }

    return(
        <div className = 'contactContainer'>
                <h1>Contacto</h1>
                <h5>Te esperamos por medio de Whatsapp las 24hs del día para contestar cualquier consulta!</h5>

                <div className = 'form'>
                    <label for="name"><b>Nombre</b></label>
                    <input  className = 'input-holder' type="text" placeholder="Ingrese su nombre" onChange = {e => setName(e.target.value)}/>
    
                    <label for="surname"><b>Apellido</b></label>
                    <input className = 'input-holder'  type="text" placeholder="Ingrese su apellido" onChange = {e => setSurname(e.target.value)}/>
    
                    <label for="email"><b>Correo Electronico</b></label>
                    <input className = 'input-holder'  type="text" placeholder="Ingrese su correo" onChange = {e => setEmail(e.target.value)}/>

                    <label for="message"><b>Comentario</b></label>
                   
                    <textarea className = 'input-holder' rows='10' type="text" placeholder="Ingrese su comentario" onChange = {e => setMessage(e.target.value)}/>
                </div>

                <button onClick = {submitHandle} className = 'button'>Enviar</button>
        </div>
    )
}
export default Contacto