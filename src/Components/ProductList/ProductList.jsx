import React,{useState, useContext} from 'react';
import Product from '../Product/Product';
import Title from '../Title/Title';
import {ProductsContext} from "../../App";



function ProductList() {
  
    const {storeProduct}= useContext(ProductsContext);
    
    return (
        <>
        
           <div className="py-5">
           <div className="container">
           <Title title="Our Store"/>
          
               <div className="row ">
                  {storeProduct.map(product => <Product key={product.id} product ={product}/>)}
               </div>
           </div>
           </div> 
           
            
        </>
    )
}

export default ProductList
