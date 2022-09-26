/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

const MyAccount = () => {

  const [orders, setOrders] = useState();

  useEffect(() => {
    const getOrders = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/orders`);
        setOrders(data);
      } catch (error) {
        console.log(error)
      }
    };
    getOrders();
  }, []);
  console.log("Form Accoutn",orders)
  console.log("Form Accoutn",useLocation())

    return (
    <>
      <section className="container">
        <h1 className="mb-3">My Account</h1>
        <div className="row">
          <div className="col">
            <Link className="dashboardLinks" to='/create_offer' state={orders}>
            <div className="d-flex flex-column flex-md-row flex-row align-items-center dashboardOptions p-3">
              <div className="p-2"><button class="btn btn-primary text-white"><i class="bi bi-house-heart"></i></button></div>
              <div className="p-2">
                <span className="tagline"> My kitchen</span><br/>
                <span className="subline"> Personal information</span>
              </div>
            </div>
            </Link>
          </div>
        </div>

        <div className="row mt-2">
        <div className="col">
          <Link className="dashboardLinks" to='/orders_received' state={orders}>
          <div className="d-flex flex-column flex-md-row flex-row align-items-center dashboardOptions p-3">
            <div className="p-2"><button class="btn btn-primary text-white"><i class="bi bi-calendar2-heart"></i></button></div>
            <div className="p-2">
              <span className="tagline"> Order Recieved</span><br/>
              <span className="subline"> Orders received by you</span>
            </div>
          </div>
          </Link>
        </div>
        </div>
        <div className="row mt-2">
        <div className="col">
          <Link className="dashboardLinks" to='/order_history' state={orders}>
          <div className="d-flex flex-column flex-md-row flex-row align-items-center dashboardOptions p-3">
            <div className="p-2"><button class="btn btn-primary text-white"><i class="bi bi-calendar2-heart"></i></button></div>
            <div className="p-2">
              <span className="tagline"> Order history</span><br/>
              <span className="subline"> My orders</span>
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
