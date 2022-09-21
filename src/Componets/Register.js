/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { registerUser } from "../utils/regitsterUser";
import axios from 'axios';
import { toast } from "react-toastify";


const Register = ({ isAuthenticated, setIsAuthenticated, setToken }) => {

  const [{ userName, email, profilePic, password }, setFormState] = useState({
    userName: "",
    email: "",
    profilePic: "",
    password: ""
  });

  const handleChange = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();

      formData.append('userName', userName);
      formData.append('email', email);
      formData.append('password', password);

      // if (!user_name || !password || !email )
      //   return alert("Please fill out all the fields");
      const response = await registerUser({
         userName, email, profilePic, password 
      });
      console.log(response.headers.token);

      localStorage.setItem("token", response.headers.token);
      setToken(response.headers.token);
      setIsAuthenticated(true);
      navigate('/', {replace:true});
    } catch (error) {
      console.log(error)
      // toast.error(error.message);
    }
  };
  // if (isAuthenticated) return <Navigate to="/" replace />;


  return (
    <div>
      <section className="d-flex mh-100 align-items-center min-vh-100" style={{ marginTop: "100px" }}>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row justify-content-center bg-primary rounded-3 align-items-center my-5">
              <div className="col-md-5 rounded-3 p-5">
                <h2 className='text-white'>Healthy Home Made Food Made With Love For You</h2>
              </div>

              <div className="col-md-7 bg-white rounded-3 shadow border p-5 text-center">
                <img className="mb-4 mx-auto d-block" src={logo} width="70px" alt="Logo HomeMade" />
                <div className="text-center mb-3">
                  <h3>Create Account</h3>
                </div>
                <div className='w-75 mx-auto'>
                  <div className="text-center">
                    <div className="form-outline mb-4">

                      <input type="text" id="userName" className="form-control" placeholder='Full Name' value={userName}
                        onChange={handleChange} />

                    </div>
                    <div className="form-outline mb-4">
                      <input type="email" id="email" className="form-control" placeholder='Email' value={email}
                        onChange={handleChange} />

                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="password" className="form-control" placeholder='Password' value={password}
                        onChange={handleChange} />

                    </div>

                    <button className="btn btn-block mb-3 btn-color" type="submit" >Create Account</button>
                  </div>
                </div>

                <p className="text-center">or</p>
                <div className="row text-center">
                  <div class="col">
                    <i className="bi bi-google m-2 icon-google"></i>
                    Signup with Google
                  </div>
                  <div className="col">
                    <i className="bi bi-facebook m-2 icon-face"></i>
                    Signup with Facebook
                  </div>
                </div>
                <div className='mt-4'>
                  <p>Already have an account?
                    <Link to='/login'>Log In</Link> </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Register;
