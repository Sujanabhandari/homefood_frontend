/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link, useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useEffect } from 'react';
const ratingChanged = (newRating) => {
  console.log("Rating", newRating);
};

const OrderHistory = () => {
  
  console.log("Form Accoutn",useLocation())
  const {state:{orders}} = useLocation()

  // const data = state;
  console.log(orders);

    return (
    <>
      <section className="container">
        <h1 className="mb-3">My order history</h1>
        <div className="row">
          <div className="col">
            <div className="d-flex flex-column flex-md-row flex-row justify-content-between align-items-center orderedFood p-3">
              <div className="p-2">
                <div className="wrapperImg d-block d-md-inline-block mx-auto">
                  <img src="https://web-assets.bcg.com/3c/3d/794ddde7481695d246407d66e179/food-for-thought-the-untapped-climate-opportunity-in-alternative-proteins-rectangle.jpg" />
                </div>
                <span className="foodTitle"> Title of food</span>
              </div>
              <div className="p-2">Quantity: 2</div>
              <div className="p-2">Total price: 15€</div>
              <div className="p-2">Order date: 14.9.2022</div>
              <div className="p-2">Home Made by: Sujana</div>
              <div className="p-2 ratingBar">
                <span>Rate creator: </span>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col">
            <div className="d-flex flex-column flex-md-row flex-row justify-content-between align-items-center orderedFood p-3">
              <div className="p-2">
                <div className="wrapperImg d-block d-md-inline-block mx-auto">
                  <img src="https://web-assets.bcg.com/3c/3d/794ddde7481695d246407d66e179/food-for-thought-the-untapped-climate-opportunity-in-alternative-proteins-rectangle.jpg" />
                </div>
                <span className="foodTitle"> Title of food</span>
              </div>
              <div className="p-2">Quantity: 2</div>
              <div className="p-2">Total price: 15€</div>
              <div className="p-2">Order date: 14.9.2022</div>
              <div className="p-2">Home Made by: Sujana</div>
              <div className="p-2 ratingBar">
                <span>Rate creator: </span>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
    )
  
}

export default OrderHistory;
