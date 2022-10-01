/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useHomeContext } from './MainContext';
import { useRef, useState } from 'react';
import ReactStars from "react-rating-stars-component";

import { handleFormData } from '../utils/handleFormData';

const OfferPreview = () => {

  const { formState, setFormState, user } = useHomeContext();
  const imagePreview = formState.image && URL.createObjectURL(formState.image);

  console.log("About User Information", user)
 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = handleFormData(formState)
      const { data } = await axios.post(
        `http://localhost:3000/offers/create`,
        formData, {
        headers: { 'Authorization': `${localStorage.getItem("token")}` }
      }
      );
      navigate(`/`, { replace: false });

    } catch (error) {
      console.log(error)
    }

  };

  return (
    <>
        <section className="album singlePost">
          <div className="container">
            <h1>Preview</h1>
            <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-12 col-md-4">
                  <div className="card shadow-sm">
                    <div className="foodQuantity">{formState.quantity} meals left</div>
                    <div className="featured">{formState.categories}</div>
                    <div className="wrapperImg">
                      <img src={imagePreview} />
                    </div>

                    <div className="card-body">
                        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-3">
                          <div className="col-lg-6 col-md-8">
                            <div className="card-text foodTitle">{formState.title}</div>
                            <div className="foodTime"><i className="bi bi-clock"></i> Collect: {formState.timeSlot}</div>
                            <div className="price">{formState.price} </div>
                          </div>
                          <div className="col-lg-6 col-md-8 text-end">
                            <div>&nbsp;</div>
                            <div className="foodAddress"><i className="bi bi-geo-alt-fill"></i> {formState.address}</div>
                            <div className="foodCreator"><i class="bi bi-person"></i> {user?.userName}</div>
                          </div>
                        </div>
                        { formState.specials ? (
                          <div className="row mt-2">
                            <div className="col"><span className="tag"><i className="bi bi-tag-fill"></i> {formState.specials}</span></div>
                          </div>
                        ) : (
                          <div></div>
                        )}
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-8 mt-3 mt-md-0">

                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Description</Accordion.Header>
                      <Accordion.Body>
                        {formState.description}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>About Food Creator</Accordion.Header>
                      <Accordion.Body>
                      <div className="row g-3">
                        <div className="col-12 col-md-4">
                          <div className="wrapperImgCreator">
                            <img src={user.profilePic} />
                          </div>
                        </div>
                        <div className="col-12 col-md-8">
                          <div>{user.userName}</div>
                          <div>Joined at: {new Date(user.date).toLocaleDateString()}</div>
                          <div>Average Rating: {Math.round(user.averageRating * 10) / 10} / 5</div>
                          <ReactStars
                            count={5}
                            value={Math.round(user.averageRating * 10) / 10}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700" />
                        </div>
                      </div>
                      
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                </div>
              </div>

              <div className="row">
                <div className="col text-end">
                  <button type="submit" class="btn btn-secondary text-white mt-3"><i class="bi bi-box-arrow-in-up"></i> Publish</button>

                </div>
              </div>

            </form>

          </div>
        </section>
    </>

  )


}

export default OfferPreview;
