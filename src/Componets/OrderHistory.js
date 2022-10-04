/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { useHomeContext } from './MainContext';
import OfferHistory from './OfferHistory';

const OrderHistory = () => {
  const { user, orders} = useHomeContext();
  const orderHistory = orders?.filter((history) => history.customerId._id == user?._id);
 

  const sorryMessage = () => {
    if(!orders?.length)
      return <div className="text-center">
        <h2>Your Order history is clear. Please order a Home made food</h2>
        <Link className='text-secondary mt-5' to='/'>
          <h3>Order Food</h3>
        </Link>
        </div>
  }

  return (
    <>
      <section className="container">
        <h1 className="mb-3">My order history</h1>
        {sorryMessage()}
        {orderHistory?.map((orderHistory, index) => (
          <div className="row" key={index}>
            <div className="col">
              <div className="d-flex flex-column flex-md-row flex-row justify-content-between align-items-center orderedFood p-3 mb-2">
                <div className="p-2">
                  <div className="wrapperImg d-block d-md-inline-block mx-auto float-md-start">
                    <img src={orderHistory.offerId.image} />
                  </div>
                  <span className="foodTitle"> {orderHistory.offerId?.title}</span>
                </div>
                <div className="p-2">Quantity:{orderHistory.order_quantity}</div>
                <div className="p-2">Order date: {new Date(orderHistory.date).toLocaleDateString()}</div>
                <div className="p-2">Home Made by: {orderHistory.creatorId.userName}</div>
                <div className="p-2 ratingBar">
                  <Link className="btn btn-sm btn-outline-secondary" to={`/order_history/rating_creator/${orderHistory._id}`}>Rate creator <i className="bi bi-star-fill"></i></Link>
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
