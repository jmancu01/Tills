import React, { useState, useEffect } from 'react';
import ProductList from './ProductList.js'
import SearchBar from './SearchBar.js'

function AllProducts () {
   
    const [input, setInput] = useState('');
    const [productListDefault, setProductListDefault] = useState();
    const [productList, setProductList] = useState();
  
    const fetchData = async () => {
      return await fetch('https://random-data-api.com/api/crypto_coin/random_crypto_coin')
        .then(response => response.json())
        .then(data => {
           setProductList(data) 
           setProductListDefault(data)
         });}
  
    const updateInput = async (input) => {
       const filtered = productListDefault.filter(product => {
        return product.coin_name.toLowerCase().includes(input.toLowerCase())
       })
       setInput(input);
       setProductList(filtered);
    }
  
    useEffect( () => {fetchData()},[]);

    return (
        <div className = 'AllProducts'>
            <h1>Product List</h1>
            <SearchBar 
            input={input} 
            onChange={updateInput}
            />
            <ProductList productList={productList}/>

        </div>
    );
   
}

export default AllProducts;