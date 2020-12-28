import React from "react";
import Form from "./Form";
import "./Main.css";
function Main() {
  return (
    <div className="main">
      <div className="main__info">
        <div className="alignment">
          <img
            src="https://cdn57.androidauthority.net/wp-content/uploads/2019/01/Dell-laptops-CES-2018-6-of-18.jpg"
            alt="logo"
          />
          <h5>HI</h5>
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            eum nemo commodi facere eaque quos ab cumque officia voluptatem
            possimus.
          </h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="main__form">
          <Form />
      </div>
    </div>
  );
}

export default Main;
