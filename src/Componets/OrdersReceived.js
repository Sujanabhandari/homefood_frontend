/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class OrdersReceived extends Component {
  render() {
    return (
    <>
      <section className="container dashboard">
        <h1 className="mb-3">Orders Received</h1>
        <div className="row">
          <div className="col">
            <div className="d-flex flex-column flex-md-row flex-row justify-content-between align-items-center ordersReceived p-3">
            <div className="p-2">
              <div className="wrapperImg d-block d-md-inline-block mx-auto">
                <img src="https://web-assets.bcg.com/3c/3d/794ddde7481695d246407d66e179/food-for-thought-the-untapped-climate-opportunity-in-alternative-proteins-rectangle.jpg" />
              </div>
              <span className="foodTitle"> Title of food</span>
            </div>
            <div className="p-2">Quantity: 2</div>
            <div className="p-2">Total price: 15€</div>
            <div className="p-2">Order date: 14.9.2022</div>
            <div className="p-2">Pay method: cash</div>
            <div className="p-2">Ordered by: Sujana</div>
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col">
            <div className="d-flex flex-column flex-md-row flex-row justify-content-between align-items-center ordersReceived p-3">
              <div className="p-2">
                <div className="wrapperImg d-block d-md-inline-block mx-auto">
                  <img src="https://web-assets.bcg.com/3c/3d/794ddde7481695d246407d66e179/food-for-thought-the-untapped-climate-opportunity-in-alternative-proteins-rectangle.jpg" />
                </div>
                <span className="foodTitle"> Title of food</span>
              </div>
              <div className="p-2">Quantity: 2</div>
              <div className="p-2">Total price: 15€</div>
              <div className="p-2">Order date: 14.9.2022</div>
              <div className="p-2">Pay method: cash</div>
              <div className="p-2">Ordered by: Sujana</div>
            </div>
          </div>
        </div>

      </section>
    </>
    )
  }
}

export default OrdersReceived;
