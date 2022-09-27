/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useHomeContext } from './MainContext';


const OrdersReceived = () => {

  const { user } = useHomeContext();
  const { state } = useLocation()

  console.log("From Order Recieved", state);
  console.log("From User Recieved", user);


  const offerHistory = state?.filter((history) => history.creatorId._id == user._id);
  console.log("Form Comparioson", offerHistory);

  
    return (
    <>
      <section className="container dashboard">
        <h1 className="mb-3">Orders Received</h1>
        {offerHistory?.map((offerHistory, index) => (
        <div className="row mt-2">
          <div className="col">
            <div className="d-flex flex-column flex-md-row flex-row justify-content-between align-items-center ordersReceived p-3">
              <div className="p-2">
                <div className="wrapperImg d-block d-md-inline-block mx-auto">
                  <img src="https://web-assets.bcg.com/3c/3d/794ddde7481695d246407d66e179/food-for-thought-the-untapped-climate-opportunity-in-alternative-proteins-rectangle.jpg" />
                </div>
                <span className="foodTitle"> {offerHistory.offerId.title}</span>
              </div>
              <div className="p-2">Quantity:{offerHistory.offerId.order_quantity}</div>
              {/* <div className="p-2">Total price: 15€</div> */}
              <div className="p-2">Order date: {offerHistory.offerId.date}</div>
              {/* <div className="p-2">Pay method: cash</div> */}
              <div className="p-2">Ordered by: {offerHistory.customerId.userName}</div>
            </div>
          </div>
        </div>
        ))}

      </section>
    </>
    )

}

export default OrdersReceived;
