import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import { AiOutlineShopping,AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";
import "./Navbar.css";
function Navbar() {
  const [menu, setMenu] = useState(false);


  return (
    <nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
      <div onClick={()=>setMenu(!menu)} className="btnMenu">
      <AiOutlineMenu/>
      </div>
      <Link onClick={()=>setMenu(false)} to="/" >
        <img className="logo" src={logo} alt="logo"></img>
      </Link>
      <ul className= "navbar-nav" id={menu? "hidden":""}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={()=>setMenu(false)}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/store" className="nav-link" onClick={()=>setMenu(false)}>
            Our Store
          </Link>
        </li>
        
      </ul>
      <Link to="/cart" className="ml-auto">
        <button onClick={()=>setMenu(false)} className="btn-cart">
          <span className="mr-2">
            <AiOutlineShopping />
          </span>
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
