/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useHomeContext } from './MainContext';
import {  useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import axios from 'axios';

import 'reactjs-popup/dist/index.css';

export default function RatingCreator() {

    const { user, orders, setCustomerRating } = useHomeContext();
    const { id } = useParams();
    const filteredOrders = orders?.filter((order) => order._id == id);
    const ratingChanged = async (newRating) => {
        setCustomerRating(newRating);
        try {
            const { data } = await axios.post(
                `https://home-made.onrender.com/ratings`,
                {
                    rating: newRating,
                    creatorId: filteredOrders[0].creatorId._id,
                    customerId: user._id,
                },
            );
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <section className="album rateCreator">
            <div className="container">
                <h1 className="text-center">Rate Creator</h1>
                {filteredOrders?.map((filteredOrders, index) => (
                    <div className="row" key={index}>
                        <div className="col-12 col-md-6 mx-auto">
                            <div className="card shadow-sm">
                                <div className="wrapperImg">
                                    <img src={filteredOrders.offerId?.image} />
                                </div>

                                <div className="card-body">

                                    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-3">
                                        <div className="col-lg-6 col-md-8 col-12">
                                            <div className="card-text foodTitle">{filteredOrders.offerId?.title}</div>
                                            <div className="foodAddress"><i className="bi bi-geo-alt-fill"></i> {filteredOrders.offerId?.address}</div>
                                            <div className="foodDate"><i className="bi bi-calendar-heart"></i> {filteredOrders.offerId?.date}</div>
                                            <div className="foodQuantityAll">Total amount: {filteredOrders.offerId?.quantity} meals</div>
                                            <div className="price">Total sum: {filteredOrders.offerId?.price}</div>
                                        </div>

                                        <div className="col-lg-6 col-md-8 col-12 text-center">
                                            <div className="creatorName">About Food Creator</div>
                                            <div className="wrapperImg d-block d-md-inline-block mx-auto">
                                                <img src={filteredOrders.creatorId.profilePic} />
                                            </div>
                                            <div>{filteredOrders.creatorId.userName}</div>
                                            <div>Joined Date: {new Date(filteredOrders.creatorId.date).toLocaleDateString()}</div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col text-center" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            <ReactStars
                                                count={5}
                                                onChange={ratingChanged}
                                                size={24}
                                                isHalf={true}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                    </div>
                                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="staticBackdropLabel">Rating</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    Thankyou soo much for Rating {filteredOrders.creatorId.userName}
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    )

}
