/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";

class OrderHistory extends Component {
  render() {
    return (
    <>
    <main>

    <section className="py-5 container">
      <h1>My orders</h1>
      <div className="row">
        <div className="col">
          <div className="d-flex flex-sm-column flex-md-row flex-row justify-content-between orderedFood p-3">
            <div className="p-2 foodTitle">Title of food</div>
            <div className="p-2">price: 15€</div>
            <div className="p-2">Order date: 14.9.2022</div>
            <div className="p-2">Home Made by: Sujana</div>
            <div className="p-2"><img width="100px" src="https://t4.ftcdn.net/jpg/04/11/58/81/360_F_411588122_1B9h4lllnNnOOVWCehOtSk4YfgmwD2j4.jpg" /></div>
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col">
          <div className="d-flex flex-sm-column flex-md-row flex-row justify-content-between orderedFood p-3">
            <div className="p-2 foodTitle">Title of food</div>
            <div className="p-2">price: 15€</div>
            <div className="p-2">Order date: 14.9.2022</div>
            <div className="p-2">Home Made by: Sujana</div>
            <div className="p-2"><img width="100px" src="https://t4.ftcdn.net/jpg/04/11/58/81/360_F_411588122_1B9h4lllnNnOOVWCehOtSk4YfgmwD2j4.jpg" /></div>
          </div>
        </div>
      </div>

    </section>

    </main>
    </>
    )
  }
}

export default OrderHistory;
