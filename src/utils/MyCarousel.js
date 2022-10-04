/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React from 'react'

const MyCarousel = ({ posts }) => {
  const results = posts.map(post => post);
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel carousel-dark slide mb-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {results?.map((post, index) => (
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} key={index}
              className="active" aria-current="true" aria-label="Slide 1"></button>
          ))}
        </div>
        {results.length ?
          <div className="carousel-inner">
            {results?.map((post, index) => (
              <div className={`carousel-item ${index == 0 && "active"}`} key={index}>
                <img src={post.image} className="d-block carousle-img" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="text-white">{post.title}</h5>
                </div>
              </div>
            ))}
          </div> :
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src='/car1.jpg' className="d-block carousle-img" alt="..." />
            </div>
          </div>
        }

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

