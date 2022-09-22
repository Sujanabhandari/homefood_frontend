
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OfferPreview = () => {
  const location = useLocation();
  const offerData = location.state?.formState;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
        e.preventDefault();
        // if (!title || !description || !quantity || !image || !price || !timeSlot || specials)
        //     return alert("Please fill out all the fields");
        const formData = new FormData();
        formData.append('title', offerData.title);
        formData.append('description', offerData.description);
        formData.append('quantity', offerData.quantity);
        formData.append('image', offerData.image);
        formData.append('price', offerData.price);
        formData.append('address', offerData.address);
        formData.append('timeSlot', offerData.timeSlot);
        formData.append('specials', JSON.stringify(offerData.specials));
        formData.append('categories', offerData.categories);

        for (let [key, value] of formData.entries()) {
            console.log(key, value)
        }

        const { data } = await axios.post(
            `http://localhost:3000/offers`,
            formData

        );
        navigate(`/home`, { replace: true });
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
                <div className="featured">Featured</div>
                <div className="wrapperImg">
                  <img src={offerData.image} />
                </div>
                <div className="card-body">
                    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-3">
                      <div className="col-lg-6 col-md-8">
                        <div className="card-text foodTitle">{offerData.title}</div>
                        <div className="foodTime">{offerData.timeSlot}</div>
                        <div className="price">{offerData.quantity}</div>
                      </div>
                      <div className="col-lg-6 col-md-8 text-end">
                        <div className="mt-4"></div>
                        <div className="foodAddress">{offerData.address}</div>
                        <div className="foodCreator">Made by: xy</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col"><span className="tag sushi">test tag 1</span> <span className="tag">test tag 2</span></div>
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
                  <Accordion.Header>Package</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
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

