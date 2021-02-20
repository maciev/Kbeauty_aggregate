import React from "react";
import "./ProductCard.css";

function ProductCard({ id, content, title, brand, image, price }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-128x128">
          <img src={image} alt="" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{brand}</p>
            <p className="subtitle is-6">{title}</p>
          </div>
        </div>

        <div className="content">
          {content}
          <br />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
