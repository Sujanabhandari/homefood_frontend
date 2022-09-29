/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link, useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useEffect } from 'react';
import { useHomeContext } from './MainContext';

const ratingChanged = (newRating) => {
  console.log("Rating", newRating);
};

const OfferHistory = ({posts}) => {
  const { user, orders } = useHomeContext();
  const { state } = useLocation()

  // console.log("From Offer History", state.customerId);
  console.log("From Offer History", posts);

  const offerHistory = posts?.filter((history) => history.creatorId._id == user._id);
  console.log("Form Comparioson", offerHistory);


  return (
    <>
      <section className="container">
        <h1 className="mb-3">My offer history</h1>
        {offerHistory?.map((offerHistory, index) => (
          <>
            <div className="row" key={index}>
              <div className="col">
                <div className="d-flex flex-column flex-md-row flex-row justify-content-between align-items-center offeredFood p-3 mb-2">
                  <Link to={`/my_account/offer_history/${offerHistory._id}`}>
                    <div className="p-2">
                      <div className="wrapperImg d-block d-md-inline-block mx-auto float-md-start">
                        <img src="https://web-assets.bcg.com/3c/3d/794ddde7481695d246407d66e179/food-for-thought-the-untapped-climate-opportunity-in-alternative-proteins-rectangle.jpg" />
                      </div>
                      <span className="foodTitle"> {offerHistory.title}</span>
                    </div>
                  </Link>
                  <div className="p-2">Quantity:{offerHistory.quantity}</div>
                  <div className="p-2">Total price: {offerHistory.price}</div>
                  <div className="p-2">Order date: {offerHistory.date}</div>
                  {/* <div className="p-2">Home Made by: {offerHistory.creatorId.userName}</div> */}
                </div>
              </div>
            </div>
          </>
        ))}
      </section>
    </>
  )

}

export default OfferHistory;
