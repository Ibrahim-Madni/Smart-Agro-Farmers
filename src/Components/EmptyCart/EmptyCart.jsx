import React from 'react'
import "./EmptyCart.css"
import {Link} from "react-router-dom"
function EmptyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center">
                    <h4>Your cart is currently empty</h4>
                    <Link to="/store"><button  className="Btn mt-4 mb-2">Back to Store</button></Link>
                </div>
            </div>
        </div>
    )
}

export default EmptyCart
