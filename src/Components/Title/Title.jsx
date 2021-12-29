import React from "react";
import "./Title.css"
function Title({title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto text-center text-title">
        <h1 className=" text-capitalize font-weight-bold">
          {title}
        </h1>
        </div>
    </div>
  );
}

export default Title;
