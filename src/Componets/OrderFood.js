import { useParams, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";


const OrderFood = ({ posts }) => {
  
  const { id } = useParams();
  const clickedPost = posts?.filter((post) => post._id == id);
  const creatorInformation = clickedPost.map((post) =>  post);
  const [quantityCounter, setquantityCounter] = useState(1);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const increase = (e) => {
    e.preventDefault();
    if (quantityCounter > -1 && mealsleft > 0)
      setquantityCounter(count => count + 1);
  };

  const decrease = (e) => {
    e.preventDefault();
    if (quantityCounter > 0)
      setquantityCounter(count => count - 1);
  }
  const sumfunction = clickedPost.map(post => {
    return post.price * quantityCounter;
  })
  const mealsleft = clickedPost.map(post => {
    return post.quantity - quantityCounter;
  })



  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const {data: {newOrder, updateQuanity}} = await axios.post(
        `https://home-made.onrender.com/offers/${id}/order`,
        {
          creatorId:creatorInformation[0].creatorId._id, 
          offerId: creatorInformation[0]._id,
          order_quantity:quantityCounter
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

        <section key={index} className="text-center orderFood">
          <form onSubmit={handleSubmit}>
            <div className="p-5 bg-image" style={{ backgroundImage: `url(${post.image})` }}></div>
              <div className="container">
                <div className="card mx-4 mx-md-5 shadow-5-strong">
                  <div className="card-body py-5 px-md-5">

                    <div className="row d-flex justify-content-center">
                      <div className="col-lg-8">
                        <h2 className="fw-bold mb-5">Choose your payment</h2>


                        <div className="row">
                          <div className="col">

                            <h5><i className="bi bi-clock"></i> Collect: {post.timeSlot}</h5>
                            <h5><i className="bi bi-geo-alt-fill"></i> {post.address}</h5>

                            <div className="selectQuantity my-5 py-5">

                              <h5>Choose your quantity of {post.title}</h5>
                              <p><span className="text-secondary">{post.quantity}</span> meals available</p>

                              <div className="mt-1">

                                <button onClick={decrease} className="btn btn-secondary text-white btn-block mb-4">
                                  <i className="bi bi-dash-circle"></i>
                                </button>
                                <button onClick={increase} className="btn btn-secondary text-white btn-block mb-4 mx-1">
                                  <i className="bi bi-plus-circle"></i>
                                </button>
                                <div id="quantityCounter">Order: <span className="text-secondary">{quantityCounter}</span> meals</div>

                              </div>

                            </div>

                            <table className="table mt-5">
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
                                  <td>{quantityCounter}</td>
                                  <td>{post.price} ???</td>
                                  <td>{sumfunction} ???</td>
                                </tr>
                              </tbody>
                            </table>

                            <div className="mt-5">
                              <button type="button" className="btn btn-secondary text-white btn-block mb-4 mx-1" onClick={handleShow}>
                                <i className="bi bi-cash-coin"></i> Pay in cash
                              </button>
                            </div>

                            <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>Pay in cash</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <h3>Confirm to Order the food.</h3>
                                Please bring your money with you exactly and perhaps remember bringing packaging for your food.
                              </Modal.Body>
                              <Modal.Footer>
                                <Button variant="secondary text-white" onClick={handleSubmit}>
                                  Confirm Order
                                </Button>
                              </Modal.Footer>
                            </Modal>

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </form>
        </section>
      ))}
    </>
  );

};

export default OrderFood;
