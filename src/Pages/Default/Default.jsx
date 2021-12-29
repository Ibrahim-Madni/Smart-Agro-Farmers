import React from "react";
import {Link} from "react-router-dom"
import "./Default.css"
function Default(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <h1 className="display-3">404</h1>
          <h1>Error</h1>
          <h2>Page Not Found</h2>
          <h3 className="text-danger">
            The requested url was not found
          </h3>
          <Link to="/">
          <button className="backBtn">
            Back to Home
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Default;
