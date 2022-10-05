/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import { useHomeContext } from './MainContext';
const OffferHistoryDetails = () => {
  const { posts, setPosts} = useHomeContext();

  const { id } = useParams();
  const clickedPost = posts?.filter((post) => post?._id == id);
  const result = clickedPost[0]?._id;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.delete(
        `https://home-made.onrender.com/offers/delete/${result}`,
        {
          headers: { 'Authorization': `${localStorage.getItem("token")}` }
        }
      );
      setPosts((prev) => [...prev, data]);
    
      navigate('/my_account/offer_history', { replace: true });
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <>
      <section className="album singlePost">
        <div className="container">
          <h1>My Offer</h1>
          {clickedPost?.map((post, index) => (
            <div className="row" key={index}>
              <div className="col-12 col-md-4">
                <div className="card shadow-sm">
                  <div className="foodQuantity">{post.quantity} meals left</div>
                  <div className="featured">{post.categories}</div>
                  <div className="wrapperImg">
                    <img src={post.image} />
                  </div>

                  <div className="card-body">
                    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-3">
                      <div className="col-lg-6 col-md-8">
                        <div className="card-text foodTitle">{post.title}</div>
                        <div className="foodTime"><i className="bi bi-clock"></i> Collect: {post.timeSlot}</div>
                        <div className="price">{post.price} </div>
                      </div>
                      <div className="col-lg-6 col-md-8 text-end">
                        <div>&nbsp;</div>
                        <div className="foodAddress"><i className="bi bi-geo-alt-fill"></i> {post.address}</div>
                        <div className="foodCreator"><i className="bi bi-person"></i> {post.creatorId?.userName}</div>
                      </div>
                    </div>
                    {post.specials ?
                      <div className="row mt-2">
                        <div className="col"><span className="tag"><i className="bi bi-tag-fill"></i> {post.specials}</span></div>
                      </div>
                      :
                      <div></div>
                    }
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-8 mt-3 mt-md-0">

                <Accordion defaultActiveKey="0" alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Description</Accordion.Header>
                    <Accordion.Body>
                      {post.description}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

              </div>
            </div>

          ))}

          <div className="row">
            <div className="col text-end">
              <button type="submit" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                className="btn btn-secondary text-white ms-1 mt-3">
                <i className="bi bi-bag"></i> Delete Post</button>
            </div>
          </div>

          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Delete Offer</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  Do you want to delete this offer?
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleSubmit}>Confirm and Close</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>

  )
}

export default OffferHistoryDetails;
