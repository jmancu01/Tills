import {React, useState} from 'react'
import './Products.css'
import ItemCount from './ItemCount.js'
import { Link } from 'react-router-dom'

function Products (props){
    


    return (
        <div className = 'Products'>
            <div className= 'ProductContainer'>
                <img alt= {props.title} src= {props.image} className ='imgProduct'/>
                <Link to ={`/Products/${props.id}`} >Toca</Link>
                <div className = 'InfoContainer' >
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