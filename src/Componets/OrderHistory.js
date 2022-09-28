/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link, useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useEffect, useState, useRef } from 'react';
import { useHomeContext } from './MainContext';
import axios from 'axios';


const OrderHistory = () => {
  const { user, orders, customerRating, setCustomerRating } = useHomeContext();
  console.log(customerRating);
  const { state } = useLocation();

  const orderHistory = orders?.filter((history) => history.customerId._id == user._id);

  return (
    <>
      <section className="container">
        <h1 className="mb-3">My order history</h1>
        {orderHistory?.map((orderHistory, index) => (
          <div className="row" id={orderHistory.offerId._id}>
            <div className="col">
              <div className="d-flex flex-column flex-md-row flex-row justify-content-between align-items-center orderedFood p-3">
                <div className="p-2">
                  <div className="wrapperImg d-block d-md-inline-block mx-auto">
                    <img src="https://web-assets.bcg.com/3c/3d/794ddde7481695d246407d66e179/food-for-thought-the-untapped-climate-opportunity-in-alternative-proteins-rectangle.jpg" />
                  </div>
                  <span className="foodTitle"> {orderHistory.offerId.title}</span>
                </div>
                <div className="p-2">Quantity:{orderHistory.order_quantity}</div>
                {/* <div className="p-2">Total price: 15€</div> */}
                <div className="p-2">Order date: 14.9.2022</div>
                <div className="p-2">Home Made by: {orderHistory.creatorId.userName}</div>
                <div className="p-2 ratingBar">
                  <Link to={`/order_history/rating_creator/${orderHistory._id}`}>Rate creator </Link>
                  {/* <ReactStars
                    count={5}
                    onChange={customerRating}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700" /> */}
                </div>
              </div>
            </div>
          </div>  
        ))}
      </section>
    </>
  )

}

export default OrderHistory;
