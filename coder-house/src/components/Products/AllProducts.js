import { React, useState, useEffect } from 'react';
import Products from './Products.js';
import './Products.css';
import axios from 'axios';
import SearchBar from './SearchBar.js'


const AllProducts = (props) => {
    
    const [productList, setProductList] = useState([]);
    const [input, setInput] = useState('');
  

    useEffect(() => {

        const getProduct = async() =>{

            const response = await axios.get("/api/products"); 
    
            setProductList(response.data.data )
            console.log(response.data.data)
        }

        getProduct();

    }, []);
    console.log(productList)
    
    const updateInput = async(text) => {
        console.log(input)
        setInput(text)
    }

    return (
        <div>
            <SearchBar 
            input={input} 
            onChange={updateInput}
            />
            {productList.map((productList) => (
            <Products className= 'ItemListContainer'
                id = {productList.id}
                title = {productList.title}
                price={productList.price}
                description = {productList.description}
                image= {productList.image}
                counter= {productList.counter}
                stock = {productList.stock}    
            />
            ))}
        </div>
        
    )
  
}

export default AllProducts;