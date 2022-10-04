/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { useHomeContext } from './MainContext';

const OrdersReceived = () => {

  const { user, orders } = useHomeContext();

  const offerHistory = orders?.filter((history) => history.creatorId._id === user?._id);
  console.log(offerHistory)

  const sorryMessage = () => {
    if (!offerHistory?.length)
      return <div className="text-center">
        <h2>You have not received any order.</h2>
      </div>
  }

  return (
    <>
      <section className="container dashboard">
        <h1 className="mb-3">Orders Received</h1>
        {offerHistory?.map((offerHistory, index) => (
          <div className="row mt-2" key={index}>
            <div className="col">
              <div className="d-flex flex-column flex-md-row flex-row justify-content-between align-items-center ordersReceived p-3">
                <div className="p-2">
                  <div className="wrapperImg d-block d-md-inline-block mx-auto float-md-start">
                    <img src="https://web-assets.bcg.com/3c/3d/794ddde7481695d246407d66e179/food-for-thought-the-untapped-climate-opportunity-in-alternative-proteins-rectangle.jpg" />
                  </div>
                  <span className="foodTitle"> {offerHistory.offerId?.title}</span>
                </div>
                <div className="p-2">Quantity: {offerHistory.order_quantity}</div>
                <div className="p-2">Order date:  {new Date(offerHistory.offerId?.date).toLocaleDateString()}</div>
                <div className="p-2">Ordered by: {offerHistory.customerId.userName}</div>
              </div>
            </div>
          </div>
        ))}

      </section>
      {sorryMessage()}
    </>
  )

}

export default OrdersReceived;
