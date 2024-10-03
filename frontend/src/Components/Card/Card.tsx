import React from "react";
import "./Card.css";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="card">
      <img src="Images/Image1.jpg" alt="Image"></img>
      <div className="details">
        <h2>Apple</h2>
        <p>$100</p>
      </div>
      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, veniam?
      </p>
    </div>
  );
};

export default Card;
