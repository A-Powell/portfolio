import React from "react";
import cryptomap from '../../images/cryptomaps.PNG'
import hackathonPortal from '../../images/hackathonportal.PNG'
import productqueue from '../../images/productqueue.PNG'


const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={cryptomap} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={hackathonPortal} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={productqueue} alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true" />
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true" />
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div className="quote">
        <i class="fas fa-chevron-up iii" />
        <p className="carousel-quote">
          Check out some of my Favourite Projects !
        </p>
        <i class="fas fa-chevron-up iii" />
      </div>
    </div>
  );
};
export default Carousel