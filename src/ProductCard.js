import React, { useState } from "react";
import "./ProductCard.css";

function ProductCard({ content, title, brand, image }) {
  return (
    <div className="card">
      <div className="card-image">
        <div className="media-content">
          {/*maybe, if object image undefined, loop*/}
          <img src={image} alt="product" />

          <p className="">{title}</p>
        </div>
      </div>
      <div className="media">test</div>
    </div>
  );
}

export default ProductCard;
