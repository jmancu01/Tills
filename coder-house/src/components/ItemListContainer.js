import React, { Component } from 'react';
import Products from './Products.js';
import './Products.css'

const ItemListContainer = (props) => {
    return props.products.map((products) => (
        <Products className= 'ItemListContainer'
            title = {products.title}
            price={products.price}
            description = {products.description}
            image= {products.image}
            counter= {products.counter}
            stock = {products.stock}
        />
    )
    )
}
export default ItemListContainer