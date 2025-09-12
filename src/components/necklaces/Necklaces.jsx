import React from "react";
import "./Necklaces.css";
import jewelryData from "../../data/jewelryData.json";
import ProductGrid from "../ProductGrid";
import slider1 from "../images/slider1.webp";
import slider2 from "../images/slider2.jpg";
import slider3 from "../images/slider3.webp";

function Necklaces() {
  const category = jewelryData.categories.find((cat) => cat.id === "necklaces");

  return (
    <div className="necklaces">
      <div className="mx-3">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
          data-bs-wrap="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img src={slider1} className="d-block slider" alt="Bracelet" />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={slider2} className="d-block slider" alt="Bangles" />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={slider3} className="d-block slider" alt="User" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div>
        <ProductGrid category={category} />
      </div>
    </div>
  );
}

export default Necklaces;
