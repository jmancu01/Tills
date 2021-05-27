import React,{ useState, useEffect, useContext } from 'react';
import './ItemDetail.css';
import { useParams } from 'react-router';
import ItemCount from './ItemCount.js'
import {CartContext} from '../../context/CartContext'
import {getFireStore} from '../../FireBase/index'

function ItemDetail() {
    
    let id = useParams()
    const [product, setProduct] = useState( 'marron', 'hola');
    

    useEffect(() => {

        const db = getFireStore()
        const itemCollection = db.collection('items')

        itemCollection.get().then(
            (querySnapshot) => {
                
                setProduct(querySnapshot.docs.map((doc) => doc.data() ))
               
            } 
        ).catch((e)=> console.error('firestone ', e))

     
    }, [product]);
    id = id.id
    
    
    return (
        <div>
            {product[id] ? (
                <div className='ProductContainer'> 
               
                    <img alt= {product[id].title} src= {product[id].image} className ='imgProduct'/>
                    <div className ='descriptionContainer'>
                        <h3>{product[id].title}</h3>
                        <h4>${product[id].price}</h4>
                        <h4>{product[id].description}</h4>
                        <ItemCount 
                            counter = {product[id].counter} 
                            stock ={product[id].stock} 
                            
                            product= {product[id]}
                           
                        />   
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