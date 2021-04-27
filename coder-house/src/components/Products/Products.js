import {React, useState} from 'react'
import './Products.css'
import ItemCount from './ItemCount.js'

function Products (props){
    
    const[info, setInfo] = useState(false)

    const handleClick = async() => {
        setInfo(!info)
    }
    let infoContainer 

    if(info === false){
        infoContainer = 'InfoContainer'
    } else{
        infoContainer = 'InfoContainershow'
    }

    return (
        <div className = 'Products'>
            <div className= 'ProductContainer'>
                <img alt= {props.title} src= {props.image} className ='imgProduct' onClick={handleClick}/>
                <div className = {infoContainer} >
                    <h3>{props.title}</h3>
                    <h4>{props.price}</h4>
                    <h4>{props.description}</h4>
                    <ItemCount counter = {props.counter} stock ={props.stock}/>
                    
                </div>
                            
            </div>  
        </div>
            
    )
}
export default Products