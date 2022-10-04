/* eslint-disable jsx-a11y/alt-text */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import React from 'react'

const MyCarousel = ({ posts }) => {
  console.log("Posts from carousel", posts);

  const results = posts.map(post => post);
  console.log(results);
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel carousel-dark slide mb-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          {/* <div className="carousel-item active">
            <img src={results[0]?.image} className="d-block carousle-img" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h3 className="text-white">{results[0]?.title}</h3>
              </div>
          </div> */}

          {results?.map((post, index) => (
            <div className={`carousel-item ${index == 0 && "active"}`} key={index}>
              <img src={post.image} className="d-block carousle-img" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>{post.title}</h5>
                {/* <p>Some representative placeholder content for the first slide.</p> */}
              </div>
            </div>
          ))}
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
      </div>
      )
}

      export default MyCarousel;

