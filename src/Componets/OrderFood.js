import { useParams, Link, Outlet, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { handleFormData } from '../utils/handleFormData';
import { useHomeContext } from './MainContext';
import { click } from "@testing-library/user-event/dist/click";

const OrderFood = ({ posts }) => {

  const { formState, setFormState, user } = useHomeContext();

  const { id } = useParams();

  const clickedPost = posts?.filter((post) => post._id == id);


  const creatorInformation = clickedPost.map((post) =>  post);

  console.log("Creator", creatorInformation[0].creatorId._id);

  console.log("Order Info", creatorInformation[0]._id)


  const [pricecounter, setPricecounter] = useState(1);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const increase = () => {
    if (pricecounter > -1 && mealsleft > 0)
      setPricecounter(count => count + 1);
  };
  const decrease = () => {
    if (pricecounter > 0)
      setPricecounter(count => count - 1);
  }
  const sumfunction = clickedPost.map(post => {
    return post.price * pricecounter;
  })
  const mealsleft = clickedPost.map(post => {
    return post.quantity - pricecounter;
  })


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("From handle Submit");
    try {
      e.preventDefault();
      const formData = handleFormData(formState);
      const { data } = await axios.post(
        `http://localhost:3000/offers/${id}/order`,
        {
          creatorId:creatorInformation[0].creatorId._id, 
          offerId: creatorInformation[0]._id
        },
        {
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
      {clickedPost?.map((post, index) => (

        <main>
          <form onSubmit={handleSubmit}>
          <section class="text-center orderFood">
            <div class="p-5 bg-image" style={{ backgroundImage: `url(${post.image})` }}></div>
            <div class="card mx-4 mx-md-5 shadow-5-strong">
              <div class="card-body py-5 px-md-5">

                <div class="row d-flex justify-content-center">
                  <div class="col-lg-8">
                    <h2 class="fw-bold mb-5">Choose your payment</h2>


                    <div class="row">
                      <div class="col">

                        <h5><i class="bi bi-clock"></i> Collect: {post.timeSlot}</h5>
                        <h5><i class="bi bi-geo-alt-fill"></i> {post.address}</h5>

                        <div className="selectQuantity my-5 py-5">

                          <h5>Choose your quantity</h5>
                          <p>{mealsleft} meals available</p>

                          <div className="mt-1">

                            <button onClick={decrease} class="btn btn-secondary text-white btn-block mb-4">
                              <i class="bi bi-dash-circle"></i>
                            </button>
                            <button onClick={increase} class="btn btn-secondary text-white btn-block mb-4 mx-1">
                              <i class="bi bi-plus-circle"></i>
                            </button>
                            <div id="pricecounter">Order: {pricecounter} meals</div>

                          </div>

                        </div>

                        <table class="table mt-5">
                          <thead>
                            <tr>
                              <th scope="col">Foodname</th>
                              <th scope="col">Quantity</th>
                              <th scope="col">Price</th>
                              <th scope="col">Sum</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">{post.title}</th>
                              <td>{pricecounter}</td>
                              <td>{post.price} €</td>
                              <td>{sumfunction} €</td>
                            </tr>
                          </tbody>
                        </table>

                        <div className="mt-5">
                          <button type="submit" class="btn btn-secondary text-white btn-block mb-4 mx-1" onClick={handleShow}>
                            <i class="bi bi-cash-coin"></i> Pay in cash
                          </button>

                          <button type="button" class="btn btn-secondary text-white btn-block mb-4">
                            <i class="bi bi-paypal"></i> PayPal
                          </button>
                        </div>

                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Pay in cash</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Woohoo, thanks for ordering!
                            Please bring your money with you exactly and perhaps remember bringing packaging for your food.

                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary text-white" onClick={handleClose}>
                              Thank you, got it
                            </Button>
                          </Modal.Footer>
                        </Modal>


                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>
          </form>
        </main>
      ))}
    </>
  );

};

export default OrderFood;
