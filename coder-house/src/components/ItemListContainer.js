import React, { Component } from 'react';
import Products from './Products.js';


const ItemListContainer = (props) => {
    return props.products.map((products) => (
        <Products 
            title = {products.title}
            price={products.price}
            description = {products.description}
        />
    )
    )
}
export default ItemListContainer