/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import {
  auth,
  registerWithEmailAndPassword,

} from "../firebase-config";

const Register = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [username, setUsername] = useState("");
const [user, loading, error] = useAuthState(auth);

const navigate = useNavigate();
    const register = () => {
      if (!username) alert("Please enter username");
      registerWithEmailAndPassword(username, email, password);
       navigate("/home");
      console.log("test");
    };

    useEffect(() => {
      if (loading) return;
    }, [user, loading]);

    console.log(user);

    return (
      <div>
        <section className="d-flex mh-100 align-items-center min-vh-100">
          <div className="container">
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
                      <input type="text" id="registerName" className="form-control" placeholder='Full Name' value={username}
          onChange={(e) => setUsername(e.target.value)}/>

                    </div>
                    <div className="form-outline mb-4">
                      <input type="email" id="registerEmail" className="form-control" placeholder='Email' value={email}
          onChange={(e) => setEmail(e.target.value)} />

                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="registerPassword" className="form-control" placeholder='Password' value={password}
          onChange={(e) => setPassword(e.target.value)} />

                    </div>

                  <button className="btn btn-block mb-3 btn-color" onClick={register}>Create Account</button>
                  </div>
                </div>

                <p className="text-center">or</p>
                <div className="row text-center">
                  <div class="col">
                    <i className="bi bi-google m-2 icon-google"></i>
                    Signup with Google
                  </div>
                  <div className="col">
                    <i class="bi bi-facebook m-2 icon-face"></i>
                    Signup with Facebook
                  </div>
                </div>
                <div className='mt-4'>
                  <p>Already have an account?
                    <Link to='/login'>Log In</Link> </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}

export default Register;
