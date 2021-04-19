import React, { Component } from 'react'


function Products (props){
    
        return (
            <div>
                <h1>{props.title}</h1>
                <h1>{props.price}</h1>
                <h1>{props.description}</h1>
            </div>
        )
}
export default Products