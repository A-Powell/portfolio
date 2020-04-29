import React from "react";
import primary1 from "../../images/primary1.png";
import primary2 from "../../images/primary2.png";
import primary3 from "../../images/primary3.png";

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
            <img class="d-block w-100" src={primary1} alt="First slide" />
            <div class="carousel-caption d-none d-md-block">
              <b>
                <h5>Project 1</h5>
              </b>
              <p>This is a Project I worked on.</p>
              <a className="links" href="">
                <i class="fab fa-github ii" />
              </a>
              <a className="links" href="">
                <i class="fas fa-globe ii" />
              </a>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={primary2} alt="Second slide" />
            <div class="carousel-caption d-none d-md-block">
              <b>
                <h5>Project 2</h5>
              </b>
              <p>This is a Project I worked on.</p>
              <a className="links" href="">
                <i class="fab fa-github ii" />
              </a>
              <a className="links" href="">
                <i class="fas fa-globe ii" />
              </a>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={primary3} alt="Third slide" />
            <div class="carousel-caption d-none d-md-block">
              <b>
                <h5>Project 3</h5>
              </b>
              <p>This is a Project I worked on.</p>
              <a className="links" href="">
                <i class="fab fa-github ii" />
              </a>
              <a className="links" href="">
                <i class="fas fa-globe ii" />
              </a>
            </div>
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