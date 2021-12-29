import React,{useContext} from 'react'
import {ProductsContext} from "../../App"
import "./CartItem.css"
import {AiTwotoneDelete} from "react-icons/ai"
function CartItem({cartItem}) {
    const{id,title,img,price,total,count} = cartItem;
     const {increment,decrement,removeItem} = useContext(ProductsContext);
    
    return (
      
            <div className="row  my-1 text-center mt-3 ">
                <div className="col-10 mx-auto col-lg-2">
                    <img src={img} width="80" height="110"
                     alt="product" className="img"/>
                </div>
                <div className="col-10 mx-auto col-lg-2 ">
                   <span>{title}</span>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                   <span >${price}</span>
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                   <div className="d-flex justify-content-center">
                       <div  >
                           <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
                           <span className="btn mx-1" >{count}</span>
                           <span className="btn btn-black mx-1" onClick={()=>increment(id)}>+</span>
                       </div>
                   </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                   <div className="cart-icon" onClick={()=>removeItem(id)}><AiTwotoneDelete/></div>
                </div>
                <div className="col-10 mx-auto col-lg-2 text-decoration-underline">
                   <strong>${total}</strong>
                </div>
            </div>
       
    )
}

export default CartItem
