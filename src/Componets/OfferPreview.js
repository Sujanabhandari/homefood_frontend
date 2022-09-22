
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { handleFormData } from '../utils/handleFormData';

const OfferPreview = () => {
  const location = useLocation();
  console.log(location)
  const offerData = location.state?.formState;
  console.log(offerData);
  const imagePreview = offerData.image && URL.createObjectURL(offerData.image);


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = handleFormData(offerData)

      const { data } = await axios.post(
        `http://localhost:3000/offers`,
        formData


      );
      navigate(`/`);
    } catch (error) {
      console.log(error)
    }

  };


  return (
    <>
      <main>
        <div className="album py-5 bg-light">
          <div className="container">
            <h1>Preview</h1>
            <form onSubmit={handleSubmit}>
              <div className="row">

                <div className="col-12 col-md-4">
                  <div className="card shadow-sm">
                    <div className="featured">{offerData.categories}</div>
                    <div className="wrapperImg">
                      <img src={imagePreview} />
                    </div>

                    <div className="card-body">
                      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col-lg-6 col-md-8">
                          <div className="card-text foodTitle">{offerData.title}</div>
                          <div className="foodTime"><i class="bi bi-clock"></i> Collect: {offerData.timeSlot}</div>
                          <div className="price">{offerData.price} </div>
                        </div>
                        <div className="col-lg-6 col-md-8 text-end">
                          <div className="foodQuantity">{offerData.quantity} meals left</div>
                          <div className="foodAddress"><i class="bi bi-geo-alt-fill"></i> {offerData.address}</div>
                          <div className="foodCreator">Made by: xy</div>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col"><span className="tag"><i class="bi bi-tag-fill"></i>Tag</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-8 mt-3 mt-md-0 text-end">

                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Description</Accordion.Header>
                      <Accordion.Body>
                        {offerData.description}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Specials</Accordion.Header>
                      <Accordion.Body>
                        {offerData.specials}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Quantity</Accordion.Header>
                      <Accordion.Body>
                        {offerData.quantity}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <button type="submit" class="btn buttonPurple mt-3">Publish</button>
                </div>


              </div>
            </form>
          </div>
        </div>

      </main>
    </>
  )

}

export default OfferPreview;

