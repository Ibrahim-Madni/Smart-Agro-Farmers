import React from 'react'
import "./CartColumn.css"
function CartColumn() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row mt-5">
                <div className="col-10 mx-auto col-lg-2">
                <p >Product</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                <p >Name</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                <p >Price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                <p >Quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                <p >Remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                <p >Total</p>
                </div>
            </div>
        </div>
    )
}

export default CartColumn
