/* eslint-disable jsx-a11y/alt-text */

import React, { Component } from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { registerUser } from "../utils/regitsterUser";
import axios from 'axios';
import { useHomeContext } from './MainContext';

const Register = ({ isAuthenticated, setIsAuthenticated, setToken }) => {

  const {registerFormState, setRegisterFormState}  = useHomeContext();

  console.log(registerFormState)

  const handleChange = (e) =>
    setRegisterFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append('userName', registerFormState.userName);
      formData.append('email', registerFormState.email);
      formData.append('password', registerFormState.password);
      formData.append('profilePic', registerFormState.profilePic);

      for (let [key, value] of formData.entries()) {
        console.log(key, value)
    }

      if (!registerFormState.userName || !registerFormState.password || !registerFormState.email)
        return alert("Please fill out all the fields");

      const response = await registerUser(
        formData
      );
      localStorage.setItem("token", response.headers.token);
      setToken(response.headers.token);
      setIsAuthenticated(true);
      navigate('/', { replace: true });
    } catch (error) {
      console.log(error)
    }
  };

  let formFile = useRef(null);
  let imgFrame = useRef(null);

  const previewUploadedImage = (event) => {
    setRegisterFormState((prev) => ({ ...prev, profilePic: event.target.files[0] }));
  }

  const imagePreview = registerFormState.profilePic && URL.createObjectURL(registerFormState.profilePic);

  return (
    <>
      <section className="register col-lg-8 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="row justify-content-center bg-primary rounded-3 align-items-center">
              <div className="col-md-5 rounded-3 p-5 text-center">
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

                      <input type="text" id="userName" className="form-control" placeholder='Full Name *' value={registerFormState.userName}
                        onChange={handleChange} required />

                    </div>
                    <div className="form-outline mb-4">
                      <input type="email" id="email" className="form-control" placeholder='Email *' value={registerFormState.email}
                        onChange={handleChange} required />

                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="password" className="form-control" placeholder='Password *' value={registerFormState.password}
                        onChange={handleChange} required />
                    </div>
                    <div>
                      {/* <p className='fw-bold'>Upload you Profile Picture</p> */}
                      <input className="form-control mb-3" type="file" ref={formFile} id="profilePic" onChange={previewUploadedImage} />
                      <div className="wrapperImg d-block d-md-inline-block mx-auto">
                        <img ref={imgFrame} src={imagePreview} />
                      </div>
                    </div>
                    <p className="text-muted text-start"><small>* required fields</small></p>
                    <button className="btn btn-secondary text-white" type="submit">Sign up</button>
                  </div>
                </div>
                <div className='mt-4'>
                  <p>Already have an account?
                    &nbsp;<Link to='/login'>Log in</Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
      </section>
    </>
  )
}

export default Register;
