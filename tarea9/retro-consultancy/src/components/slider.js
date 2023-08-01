import React from 'react';

const Slider = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-container">
        <h1><strong> Explora el mundo con nosotros y encuentra tu destino ideal. </strong></h1>
      </div>
      <div className="carousel-inner">
        {/* ... resto del código del carrusel ... */}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
