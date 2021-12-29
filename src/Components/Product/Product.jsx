import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../App";
import { AiOutlineShopping, AiOutlinePlus } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import "./Product.css";
import PropTypes from "prop-types";


function Product({ product }) {

const {handleDetail,addToCart} = useContext(ProductsContext);

  const { id, title, img, price, inCart } = product;

  return (
    <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div className="img-container p-5" >
          <Link to="/details" onClick={() => handleDetail(id)}>
            <img src={img} alt="image" className="card-img-top" />
          </Link>
          <button
            className="cart-btn"
            disabled={inCart ? true : false}
            onClick={() => {
              addToCart(id);
            }}
          >
            {inCart ? (
              <p className="inCart" disabled>
                In Cart
              </p>
            ) : (
              <i className="cartBtn">
                <FaCartPlus />
              </i>
            )}
          </button>
        </div>
        <div className="card-footer">
          <p className="align-self-center mb-0">{title} </p>
          <h5 className="mb-0">
            <span className="mr-1">$</span>
            {price || "Not Sure"}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Product;
