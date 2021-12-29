import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import "./CartTotals.css"
import {ProductsContext} from "../../App"

function CartTotals({}) {
    const {cartSubTotal,cartTax,cartTotal,clearCart} = useContext(ProductsContext);
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
                    <Link to="/store">
                        <button onClick={()=>clearCart()} className="btn1 btn-outline-danger mb-3  ">Clear Cart</button>
                    </Link>
                    <h5>
                        <span className="sub">
                            Subtotal:
                        </span>
                        <strong> $ {cartSubTotal}</strong>
                    </h5>
                    <h5>
                        <span className="sub">
                           Tax:
                        </span>
                        <strong> $ {cartTax} <p className="taxP">3% tax</p></strong>
                        
                    </h5>
                    <h5>
                        <span className="sub">
                           Total: 
                        </span>
                        <strong> $ {cartTotal}</strong>
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default CartTotals
