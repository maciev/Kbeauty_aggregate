import React, { useState } from "react";
import "./ProductCard.css";

function ProductCard({ content, title, brand, image }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-128x128">
          <div className="media-content">
            {/*maybe, if object image undefined, loop*/}
            <img src={image} alt="product" />
            <p className="title is-4">{brand}</p>
            <p className="subtitle is-6">{title}</p>
          </div>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">test</div>

        <div className="content">
          {content} test
          <br />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
