import React,{useContext} from 'react'
import {ProductsContext} from "../../App";
import "./Detail.css"
function Detail() {
    const {detailProduct,addToCart} = useContext(ProductsContext);
    
    const {id,company,img,info,price,title,inCart}= detailProduct;
    return (
        
     <div className="container py-5">
        
         <div className="row">
             <div className="col-10 mx-auto col-md-6 my-3">
<img src={img} className="img-fluid" alt="img"/>
             </div>

             <div className="col-10 mx-auto col-md-6 my-3 ">
                 <h1 className="title text-capitalize">{title}</h1>
                 <h4 className="font-weight-bold mt-5 mb-2 text-capitalize">Product by: <span className="company">{company}</span></h4>
                 <h4 className="price font-weight-bold mt-3 mb-2">Price:<span className="dollar"> ${price} </span> <span className="tax"> incl. of taxes</span></h4>
                 <p className="info mt-4 mb-2">{info}</p>
                 <button onClick={()=>addToCart(id)} disabled={inCart?true:false} className="Btn mt-4 mb-2">{inCart? "In Cart": "Add to Cart"}</button>
             </div>
         </div>
     </div>
        
    )
}

export default Detail
