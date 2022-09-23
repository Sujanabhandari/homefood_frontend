/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useHomeContext } from './MainContext';
import { useRef, useState } from 'react';

const OfferPreview = () => {
  const location = useLocation();
  const offerData = location.state?.formState;
  const navigate = useNavigate();

  // const {formState, setFormState}  = useHomeContext();
  const [imgsrc, setImgsrc] = useState("");
  const imagePreview = offerData.image && URL.createObjectURL(offerData.image);

  console.log(offerData.image)

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

        <div className="album singlePost">
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

              <div className="col-12 col-md-8 mt-3 mt-md-0">

                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Description</Accordion.Header>
                    <Accordion.Body>
                      {offerData.description}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>About Food Creator</Accordion.Header>
                    <Accordion.Body>
                    <div className="row g-3">
                      <div className="col-12 col-md-4">
                        <div className="wrapperImgCreator">
                          <img src={offerData.image} />
                        </div>
                      </div>
                      <div className="col-12 col-md-8">
                        Name XYZ<br />
                        Joined at: dd.mm.yyyy<br />
                        Rating 5/5<br />
                      </div>
                    </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

              </div>
            </div>

            <div className="row">
              <div className="col text-end">
                <button type="submit" class="btn btn-secondary text-white mt-3"><i className="bi bi-bag"></i> Publish</button>
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
