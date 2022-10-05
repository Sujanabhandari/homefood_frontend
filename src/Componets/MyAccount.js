/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useHomeContext } from './MainContext';

const MyAccount = () => {
  
  const { orders } = useHomeContext();
    return (
    <>
      <section className="container">
        <h1 className="mb-3">My Account</h1>
        <div className="row">
          <div className="col">
            <Link className="dashboardLinks" to='/create_offer'>
              <div className="d-flex flex-column flex-md-row flex-row align-items-center dashboardOptions p-3">
                <div className="p-2"><button className="btn btn-primary text-white"><i className="bi bi-house-heart"></i></button></div>
                <div className="p-2">
                  <span className="tagline">My kitchen</span><br/>
                  <span className="subline">Create new home made food.</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col">
            <Link className="dashboardLinks" to='/my_account/order_history' state={orders}>
              <div className="d-flex flex-column flex-md-row flex-row align-items-center dashboardOptions p-3">
                <div className="p-2"><button className="btn btn-primary text-white"><i className="bi bi-receipt"></i></button></div>
                <div className="p-2">
                  <span className="tagline">My Orders</span><br/>
                  <span className="subline">Foods that you ordered.</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        
        <div className="row mt-2">
          <div className="col">
            <Link className="dashboardLinks" to='/my_account/orders_received' state={orders}>
              <div className="d-flex flex-column flex-md-row flex-row align-items-center dashboardOptions p-3">
                <div className="p-2"><button className="btn btn-primary text-white"><i className="bi bi-bag-heart"></i></button></div>
                <div className="p-2">
                  <span className="tagline">Order Received</span><br/>
                  <span className="subline">Orders received for your home made food.</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col">
            <Link className="dashboardLinks" to="/my_account/offer_history">
              <div className="d-flex flex-column flex-md-row flex-row align-items-center dashboardOptions p-3">
                <div className="p-2"><button className="btn btn-primary text-white"><i className="bi bi-clock-history"></i></button></div>
                <div className="p-2">
                  <span className="tagline">My Offers</span><br/>
                  <span className="subline">Home made food that you created.</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

      </section>
    </>
    )

}

export default MyAccount;
