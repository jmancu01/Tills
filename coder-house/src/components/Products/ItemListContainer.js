import { React, useState, useEffect } from 'react';
import Products from './Products.js';
import './Products.css';
import axios from 'axios';


const ItemListContainer = (props) => {
    
    const [productList, setProductList] = useState([]);

    useEffect(() => {

        const getProduct = async() =>{

            const response = await axios.get("/api/products"); 
    
            setProductList(response.data.data )
            console.log(response.data.data)
        }

        getProduct();

    }, []);
    console.log(productList)
    

    return productList.map((productList) => (
        <Products className= 'ItemListContainer'
            id = {productList.id}
            title = {productList.title}
            price={productList.price}
            description = {productList.description}
            image= {productList.image}
            counter= {productList.counter}
            stock = {productList.stock}
        />
    )
    )
}
export default ItemListContainer