// import React, { useState, useEffect } from 'react';
// import ProductList from './ProductList.js'
// import SearchBar from './SearchBar.js'
// import axios from 'axios';
// import './ItemProduct.css';

// function AllProducts () {
 
// const [input, setInput] = useState('');
// const [productListDefault, setProductListDefault] = useState();
// const [productList, setProductList] = useState([]);

// useEffect(() => {
//           const getProduct = async() =>{

//             const response = await axios.get("/api/products"); 
      
//             setProductList(response.data.data )

//             }

//           getProduct();

//           }, []);
      
//           const[info, setInfo] = useState(false)
//           const handleClick = async() => {
//               setInfo(!info)
//           }
//           let infoContainer 
//           if(info === false){
//               infoContainer = 'InfoContainer'
//           } else{
//               infoContainer = 'InfoContainershow'
//           }

// return (
//       <div className = 'AllProducts'>
//         <h1>Product List</h1>
//         {/* <SearchBar 
//         input={input} 
//         onChange={updateInput}
//         />
//         <ProductList productList={productList}/> */}
//         { 
//             productList.lenght < 1
//             ? <p> no tengo productos </p> 
//             : productList.map(
//               (product) => 
//               <div className= 'ProductContainer'>
//                   <img alt= {product.title} src= {product.image} className ='imgProduct' onClick={handleClick}/>
//                   <div className = {infoContainer} >
//                       <h3>{product.title}</h3>
//                       <h4>{product.price}</h4>
                      
//                   </div>
//               </div>
                   
//       )
//       }
//     </div>
// );
   
// }

// export default AllProducts;