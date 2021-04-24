
import './Products.css'
import ItemCount from './ItemCount.js'

function Products (props){
  
    return (
        <div className = 'Products'>
            <div className= 'ProductContainer'>
                <img src= {props.image} className ='imgProduct'/>
                <div className = 'InfoContainer'>
                    <h3>{props.title}</h3>
                    <h4>{props.price}</h4>
                    <h4>{props.description}</h4>
                    <ItemCount counter = {props.counter} stock ={props.stock}/>
                    
                </div>
                            
            </div>  
        </div>
            
    )
}
export default Products