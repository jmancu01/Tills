import { React, useState, useEffect } from 'react';
import './Products.css';
import { useParams } from 'react-router';

function ItemDetail() {
    
    let id = useParams()

    const [product, setProduct] = useState([]);

    useEffect(() => {

        const getProduct = async() =>{

            const response = await fetch('http://localhost:5000/api/products'); 
            const user = await response.json()
            setProduct(user.data)
            console.log(user.data)
        }

        getProduct();

    }, []);
    console.log(id)
    

    return (
        <div>
            {product ? (
                <div>
                  
                </div>
            ) : (
                <h1>Trayendo info</h1>
            )
            
            }
        </div>
            
    )
    
}
export default ItemDetail