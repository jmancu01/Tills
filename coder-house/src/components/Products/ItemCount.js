import React, { useState, useEffect, useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import './ItemCount.css'

function ItemCount (props){
    
    const[counter, setCounter] = useState(props.counter)
    const[stock, setStock] = useState(props.stock)
    const cart = useContext(CartContext)
   
    //asignar props a los estados
    useEffect(()=>{
        setCounter(props.counter)
        setStock(props.stock)
    },[props.counter, props.stock])

    //sumando
    const sumando = async() => {
        if(stock > counter){
            setCounter(counter + 1)
        } 
       
    }

    //restando
    const restando = async() => {
        if(counter > 0){
            setCounter(counter - 1)
        } else{
             setCounter(0)
        }
       
    }
    
    function onAdd(){

        
        if(counter > 0){
            
            cart.addToCart(props.product, counter)
            console.log(counter)
        }else{
            console.log('error')
        }
        
    }

    return (

        <div className = 'counterContainer'>
            <button 
                className='addToCart' 
                onClick={restando} 
             >
                -
            </button>
            <h5 className='counter'>
                {counter}
            </h5>
            <button 
                className='addToCart'
                onClick={sumando} 
              >
                +
            </button>
            <div>
                <button 
                    className='addToCart' 
                    onClick={onAdd} 
                    >
                    Add to Cart
                </button>
            </div>
           
        </div>
    )
}
export default ItemCount