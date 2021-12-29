import React from 'react'
import CartItem from '../CartItem/CartItem'

function CartList({cart}) {
    
    return (
        <div className="container-fluid">
            {cart.map(item=>{
                return <CartItem key={item.id} cartItem={item}/>
            })}
        </div>
    )
}

export default CartList
