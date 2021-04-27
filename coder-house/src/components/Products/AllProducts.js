import React, { useState, useEffect } from 'react';
import ProductList from './ProductList.js'
import SearchBar from './SearchBar.js'
import axios from 'axios';

function AllProducts () {
   
    const [input, setInput] = useState('');
    const [productListDefault, setProductListDefault] = useState();
    const [productList, setProductList] = useState([]);
    
  
    useEffect(() => {

      const getProduct = async() =>{
        const {response} = await axios.get("http://localhost:5000/api/products"); 
        
        const products = await response;
  
        console.log(products);

        setProductList(products.data)
        }

      getProduct();

      }, []);
      console.log(productList)




    return (
        <div className = 'AllProducts'>
            <h1>Product List</h1>
            {/* <SearchBar 
            input={input} 
            onChange={updateInput}
            />
            <ProductList productList={productList}/> */}
            { 
                productList.lenght < 1
                ? <p> no tengo productos </p> 
                : productList.map(
                  (product) => <p> {product.title} </p>
                  
                )
            }

        </div>
    );
   
}

export default AllProducts;