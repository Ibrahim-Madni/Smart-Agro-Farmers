import React, { useContext, useEffect } from 'react'
import CartColumn from '../../Components/CartColumn/CartColumn'
import EmptyCart from '../../Components/EmptyCart/EmptyCart'
import Title from "../../Components/Title/Title"
import {ProductsContext} from "../../App"
import CartList from '../../Components/CartList/CartList'
import CartTotals from "../../Components/CartTotals/CartTotals"

function Cart() {
    const {cart,addTotals} = useContext(ProductsContext);
    useEffect(()=>addTotals(),[cart] )
    
    return (
        <div>
            <Title title={"My Cart"}/>
            {cart.length>0?<CartColumn/>:<EmptyCart/>}
            <CartList cart={cart}/>
            {cart.length>0 && <CartTotals/> }
            
        </div>
    )
}

export default Cart
