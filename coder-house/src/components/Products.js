import React, { Component } from 'react'
import './Products.css'

function Products (props){
    
        return (
            <div className = 'Products'>
                <div className= 'ProductContainer'>
                    <img src= {props.image}/>
                    <div className = 'InfoContainer'>
                        <h3>{props.title}</h3>
                        <h4>{props.price}</h4>
                        <h4>{props.description}</h4>
                    </div>
                                
                </div>  
            </div>
            
        )
}
export default Products