import React, { useState } from 'react'
import './ItemCount.css'

function ItemCount (props){

    const[counter, setCounter] = useState(props.counter)
    const[stock, setStock] = useState(props.stock)
    const[sumar, setSumar] = useState(false)
    const[restar, setRestar] = useState(true)
    const[addToCart, setAddToCart] = useState(false)


    const handleClick = async() => {
        if(counter>0){ console.log('addToCart ')}
      
    }

    const sumando = async() => {
        if(stock >= 1){
            setCounter(counter+1)
            setStock(stock-1)
            setRestar(false)
        } else{
            setSumar(false)
        }
       
    }
    const restando = async() => {
        if(counter === 0){
            setRestar(false)
        } else{
            setCounter(counter-1)
            setStock(stock+1)
        }
       
    }

    return (

        <div className = 'counterContainer'>
            <button 
                className='addToCart' 
                onClick={restando} 
                disabled = {restar}>
                -
            </button>
            <h5 className='counter'>
                {counter}
            </h5>
            <button 
                className='addToCart'
                onClick={sumando} 
                disabled = {sumar}>
                +
            </button>
            <div>
                <button 
                    className='addToCart' 
                    onClick={handleClick} 
                    disabled = {addToCart}>
                    Add to Cart
                </button>
            </div>
           
        </div>
    )
}
export default ItemCount