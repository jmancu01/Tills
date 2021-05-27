import React, { useState, useEffect } from 'react';
import Products from './Products.js';
import './Products.css';
import SearchBar from './SearchBar.js'
import { getFireStore } from '../../FireBase/index.js';

const AllProducts = () => {
    
    const [productList, setProductList] = useState([]);
    // const [isEmpty,  setIsEmpty] = useState(false)
    const [filteredProductList, setFilteredProductList] = useState([]);
    const [input, setInput] = useState('');
  

    // recibir informacion del backend
    useEffect(() => {
        const db = getFireStore()
        const itemCollection = db.collection('items')

        itemCollection.get().then(
            (querySnapshot) => {
                
                setProductList(querySnapshot.docs.map((doc) => doc.data() ))
                setFilteredProductList(querySnapshot.docs.map((doc) => doc.data() ))
                console.log(productList)
            } 
        ).catch((e)=> console.error('firestone ', e))
       
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
                {
                filteredProductList.map((productList) => (
                <Products 
                    key = {productList.id}
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