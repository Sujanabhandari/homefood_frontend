/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useHomeContext } from './MainContext';
import Accordion from 'react-bootstrap/Accordion';
import { useLocation, useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import axios from 'axios';

export default function RatingCreator() {

    const { user, orders, customerRating, setCustomerRating } = useHomeContext();
    const { state } = useLocation();

    const { id } = useParams();

    const filteredOrders = orders?.filter((order) => order._id == id);
    

    console.log("final creator", filteredOrders)

    const ratingChanged = async (newRating) => {
        setCustomerRating(newRating);
        try {
            // event.preventDefault();
            const { data } = await axios.post(
                `http://localhost:3000/ratings`,
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
        <section className="album singlePost">
            <div className="container">
                <h1>Rate Creator</h1>
                {filteredOrders?.map((filteredOrders, index) => (
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="card shadow-sm">
                                <div className="featured"></div>
                                <div className="wrapperImg">
                                    <img src={filteredOrders.offerId.image} />
                                </div>

                                <div className="card-body">

                                    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-3">
                                        <div className="col-lg-6 col-md-8">
                                            <div className="card-text foodTitle">{filteredOrders.offerId.title}</div>
                                            <div className="price">{filteredOrders.offerId.title} </div>
                                        </div>
                                        <div className="col-lg-6 col-md-8 text-end">
                                            <div className="foodAddress"><i class="bi bi-geo-alt-fill"></i> {filteredOrders.offerId.address}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>About Food Creator</Accordion.Header>
                                <Accordion.Body>
                                    <div className="row g-3">
                                        <div className="col-12 col-md-4">
                                            <div className="wrapperImgCreator">
                                                <img src={filteredOrders.creatorId.profilePic} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-8">
                                            {filteredOrders.creatorId.userName}<br />
                                            Rating 5/5<br />
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700" />

                    </div>
                ))}
            </div>
            {/* <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700" /> */}
        </section >
    )

}
