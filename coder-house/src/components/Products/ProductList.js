import React from 'react';

function ProductList(props) {

    
    console.log(productList)
    return(
        <div>
            {productList.map((data,index) => {
                if (data) {
            return (
                <div key={data.coin_name}>
                    <h1>{data.coin_name}</h1>
	            </div>	
    	        )	
    	    }
    	    return null
            }) }
   
        </div>
    )
}

export default ProductList;