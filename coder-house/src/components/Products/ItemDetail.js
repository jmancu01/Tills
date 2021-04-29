import { React, useState, useEffect } from 'react';
import Products from './Products.js';
import './Products.css';
import axios from 'axios';
import ItemCount from './ItemCount.js'

function ItemDetail(props) {
    
    
    let id = props.match.params.id;

    const [product, setProduct] = useState([]);

    useEffect(() => {

        const getProduct = async() =>{

            const response = await axios.get('/api/products'); 
    
            setProduct(response.data.data )
            console.log(response.data.data)
        }

        getProduct();

    }, []);
    

    return (
        <div>
            {product ? (
                <div>
                  <img alt= {product.title} src= {product.image} className ='imgProduct'/>
                    
                    <div className = 'InfoContainer' >
                    <h3>{product.title}</h3>
                    <h4>{product.price}</h4>
                    <h4>{product.description}</h4>
                    <ItemCount counter = {product.counter} stock ={product.stock}/>
                    </div>
                </div>
            ) : (
                <h1>Trayendo info</h1>
            )
            
            }
        </div>
            
    )
    
}
export default ItemDetail