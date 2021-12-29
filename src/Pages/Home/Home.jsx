import React from 'react'
import img from "./banner1.jpg" 
import "./Home.css"
import {Link} from "react-router-dom"
function Home() {
    return (
      <div className="header-main" >
          <div className="infoo">
          <h1 className="heading">The Best Smartphones</h1>
          <h1 className="heading">Site In The World</h1>
           <h6 style={{marginTop: "20px"}} className="descc">Where we sell smartphones of top brands at affordable prices</h6>   
         <Link to="/store">
         <button className="smartBtn">Buy Smartphone</button>
         </Link>
          </div>
          
          <img className="img-hero" src={img}  alt="hero-Img" />
          
      </div>
    )
}

export default Home
