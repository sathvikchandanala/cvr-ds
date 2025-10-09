// DynamicCarousel.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Import images
import slide1 from "./carousel-slide-1.jpg";
import slide2 from "./carousel-slide-2.jpg";
import slide3 from "./carousel-slide-3.jpg";

const DynamicCarousel = () => {
  // Array of slides
  const slides = [
    { id: 0, src: slide1, alt: "Slide 1" },
    { id: 1, src: slide2, alt: "Slide 2" },
    { id: 2, src: slide3, alt: "Slide 3" },
  ];

  return (
    <div id="carouselWithIndicators" className="carousel slide" data-bs-ride="carousel">
      
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            data-bs-target="#carouselWithIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img src={slide.src} className="d-block w-100" alt={slide.alt} />
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselWithIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselWithIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default DynamicCarousel;
