import { React, useState, useEffect } from 'react';
import Products from './Products.js';
import './Products.css';
import axios from 'axios';
import SearchBar from './SearchBar.js'


const AllProducts = () => {
    
    const [productList, setProductList] = useState([]);
    const [filteredProductList, setFilteredProductList] = useState([]);
    const [input, setInput] = useState('');
  

    // recibir informacion del backend
    useEffect(() => {

        const getProduct = async() =>{

            const response = await axios.get("/api/products"); 
            
            setProductList(response.data.data)
            setFilteredProductList(response.data.data )
            console.log(response.data.data)
        }

        getProduct();

    }, []);
    
    //Search bar function
    //filtrado
    const updateInput = async (input) => {
        const filtered = productList.filter(productList => {
            return productList.title.toLowerCase().includes(input.target.value.toLowerCase())
        })
        setInput(input.target.value)
        setFilteredProductList(filtered);
        console.log(filteredProductList)
     }

    return (
        <div>
            <SearchBar 
            input={input} 
            onChange={updateInput}
            />
            
            <div className = 'ListContainer'>
                {filteredProductList.map((productList) => (
                <Products 
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
            
        </div>
        
    )
  
}

export default AllProducts;