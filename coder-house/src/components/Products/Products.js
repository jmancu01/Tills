import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom'

function Products (props){
    
    return (
        <div className = 'Products'>
            <div className= 'ProductContainer'>
                <Link to ={`/Products/${props.id}`} >
                    <img alt= {props.title} src= {props.image} className ='imgProduct'/>
                </Link>
                <h3> ${props.price}</h3>
            </div>  
        </div>
            
    )
}
export default Products