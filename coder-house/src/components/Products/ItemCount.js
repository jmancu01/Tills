import React, { useState, useEffect, useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import './ItemCount.css'
import minus from '../../imagenes/minus.png'
import plus from '../../imagenes/plus.png'

function ItemCount (props){
    
    const[counter, setCounter] = useState(props.counter)
    const[stock, setStock] = useState(props.stock)
    const[added, setAdded] = useState(false)
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
            setAdded(true)
        }else{
            console.log('error')
        }  
    }

    return (
        <div>
        <div className = 'counterContainer'>
            <button    
                onClick={restando} 
             >
                <img alt='cart' src={minus} className= 'icon'/>
            </button>
            <h5 className='counter'>
                {counter}
            </h5>
            <button 
                onClick={sumando} 
            >
                  <img alt='cart' src={plus} className= 'icon'/>
            </button>
            <div>
                <button 
                    className='addToCart' 
                    onClick={onAdd} 
                    >
                    Add to Cart
                </button>
            </div>
            <br></br>
            
            
        </div>
        {added ? (<p>Agregado al carrito</p>):(<br></br>)}
        </div>
    )
}
export default ItemCount