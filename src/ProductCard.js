import React from "react";
import "./ProductCard.css";

function ProductCard() {
  return (
    <div class="card">
      <div class="card-image">
        <div class="media-left">
          <figure class="image is-128x128">
            <img
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">John Smith</p>
            <p class="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
          <a href="#">#responsive</a>
          <br />
          <time datetime="2012-3-14">11:09 PM - 1 Jan 2012</time>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
