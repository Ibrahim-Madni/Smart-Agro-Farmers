import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { storeProducts, detailProducts } from "./data";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/NavBar/Navbar";
import Store from "./Pages/Store/Store";
import Detail from "./Pages/Detail/Detail";
import Cart from "./Pages/Cart/Cart";
import Default from "./Pages/Default/Default";

export const ProductsContext = React.createContext();

function App() {
  const [storeProduct, setStoreProduct] = useState([]);
  const [detailProduct, setDetailProduct] = useState(detailProducts);
  const [cart, setCart] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const handleDetail = (id) => {
    setDetailProduct(getItem(id));
  };
  useEffect(() => setProducts(), []);
  const setProducts = () => {
    let products = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    setStoreProduct(products);
  };
  const addToCart = (id) => {
    const tempProduct = getItem(id);
    tempProduct.inCart = true;
    tempProduct.count = 1;
    tempProduct.total = tempProduct.price;

    const store = storeProduct;
    store[id - 1] = tempProduct;
    setCart(() => [...cart, tempProduct]);
    setStoreProduct(store);

    //  let tempProduct = storeProduct;
    //  const index = tempProduct.indexOf(getItem(id));
    //  const product = tempProduct[index];
    //  product.inCart=true;
    //  product.count = 1;
    //  product.total = product.price;
    //  setCart([...cart,product]);
    //  setStoreProduct(tempProduct);
    //  console.log(cart)
  };

  const getItem = (id) => {
    const product = storeProduct.find((item) => item.id === id);
    return product;
  };
  const increment = (id) => {
    let tempCart = cart;
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);

    const product = tempCart[index];

    product.count += 1;
    product.total = product.count * product.price;

    setCart([...tempCart]);
  };

  const decrement = (id) => {

    let tempCart = cart;
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);

    const product = tempCart[index];
if(product.count>1){
  product.count -= 1;
    product.total = product.count * product.price;
    setCart([...tempCart]);
}
else{
  removeItem(id);}    
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));

    const tempProduct = getItem(id);
    tempProduct.inCart = false;
    tempProduct.count = 0;
    tempProduct.total = 0;
    const store = storeProduct;
    store[id - 1] = tempProduct;
    setStoreProduct(store);
  };

  const addTotals = () => {
    let subTotal = 0;
    cart.map((item) => (subTotal += item.total));
    const tax = parseFloat((subTotal * 0.03).toFixed(2));
    const total = subTotal + tax;

    setCartSubTotal(subTotal);
    setCartTax(tax);
    setCartTotal(total);
    //   setCartSubTotal(cart.map(item=>cartSubTotal+=item.total))
    // setCartTax(cartSubTotal*0.1);
    // setCartTotal(cartSubTotal+cartTax);
  };
  const clearCart = () => {
    setCart([]);
    return setProducts();
  };

  return (
    <ProductsContext.Provider
      value={{
        cartSubTotal,
        cartTax,
        cartTotal,
        cart,
        storeProduct,
        clearCart,
        addTotals,
        removeItem,
        decrement,
        increment,
        addToCart,
        handleDetail,
        detailProduct,
      }}
    >
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/details">
            <Detail />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route>
            <Default/>
          </Route>
        </Switch>
      </Router>
    </ProductsContext.Provider>
  );
}

export default App;
