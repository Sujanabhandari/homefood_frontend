/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useHomeContext } from './MainContext';



const OrderHistory = () => {
  const { user, orders, customerRating, setCustomerRating } = useHomeContext();
  console.log(customerRating);
  console.log(user);

  const orderHistory = orders?.filter((history) => history.customerId._id == user._id);
  console.log("Order history", orderHistory)

  return (
    <>
      <section className="container">
        <h1 className="mb-3">My order history</h1>
        {orderHistory?.map((orderHistory, index) => (
          <div className="row">
            <div className="col">
              <div className="d-flex flex-column flex-md-row flex-row justify-content-between align-items-center orderedFood p-3 mb-2">
                <div className="p-2">
                  <div className="wrapperImg d-block d-md-inline-block mx-auto float-md-start">
                    <img src="https://web-assets.bcg.com/3c/3d/794ddde7481695d246407d66e179/food-for-thought-the-untapped-climate-opportunity-in-alternative-proteins-rectangle.jpg" />
                  </div>
                  <span className="foodTitle"> {orderHistory.offerId?.title}</span>
                </div>
                <div className="p-2">Quantity:{orderHistory.order_quantity}</div>
                <div className="p-2">Order date: {new Date(orderHistory.date).toLocaleDateString()}</div>
                <div className="p-2">Home Made by: {orderHistory.creatorId.userName}</div>
                <div className="p-2 ratingBar">
                  <Link className="btn btn-sm btn-outline-secondary" to={`/order_history/rating_creator/${orderHistory._id}`}>Rate creator <i class="bi bi-star-fill"></i></Link>
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
