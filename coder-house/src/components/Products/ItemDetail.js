import { React, useState, useEffect } from 'react';
import './ItemDetail.css';
import { useParams } from 'react-router';
import ItemCount from './ItemCount.js'

function ItemDetail() {
    
    let id = useParams()

    const [product, setProduct] = useState( 'marron', 'hola'  );
   

    useEffect(() => {

        const getProduct = async() =>{

            const response = await fetch('http://localhost:5000/api/products'); 
            const user = await response.json()
            setProduct(user.data)
            console.log(user)
        }

        getProduct();
        console.log(product)

    }, []);
    id = ((id.id) - 1)
  
    return (
        <div>
            {product ? (
                <div className='ProductContainer'> 
                    <img alt= {product[id].title} src= {product[id].image} className ='imgProduct'/>
                    <div className ='descriptionContainer'>
                        <h3>{product[id].title}</h3>
                        <h4>${product[id].price}</h4>
                        <h4>{product[id].description}</h4>
                        <ItemCount counter = {product[id].counter} stock ={product[id].stock}/>   
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