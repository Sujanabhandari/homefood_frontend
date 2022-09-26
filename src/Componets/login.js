/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import logo from '../assets/logo.png';
import hero from '../assets/hero-image.png';
import { useRef, useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import { loginUser, getUser } from "../utils/regitsterUser";
import { NavLink, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useHomeContext } from './MainContext';

const Login = () => {

  const [{ email, password }, setLoginFormState] = useState({
    email: "",
    password: ""
  });

  const {isAuthenticated, setIsAuthenticated, token, setToken}  = useHomeContext();

  const handleChange = (e) =>
    setLoginFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const navigate = useNavigate();

  //handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if (!email || !password) return alert("Please fill out all the fields");

      const response = await loginUser({ email, password });

      localStorage.setItem("token", response.headers.token);
      setToken(response.headers.token);
      setIsAuthenticated(true);
       navigate('/', { replace: true });



      // const { headers } = await loginUser({ email, password });

      // const token = headers["x-authorization-token"];

      // if (token) {

      //   const userContext = await getUser(token);
      //   console.log(userContext);

      //  localStorage.setItem("token", userContext);
      // setToken(userContext);
      // setIsAuthenticated(true);
      //  navigate('/', { replace: true });
      // }

    } catch (error) {
      console.log(error)

    }
  };



  return (
    <>
      <section className="login-page">

          <div className="col-lg-8 mx-auto">

            <div className="row g-5">

              <div className="col-md-5 py-2 login rounded-3 shadow border">
                <form onSubmit={handleSubmit}>
                  <img className="mb-4 mx-auto d-block" src={logo} width="70px" alt="Logo HomeMade" />

                  <h1 className="h3 mb-3 fw-bold mt-5">Login</h1>
                  <p>Sign in with your data that you entered during your registration.</p>

                  <div className="form-outline mb-4">
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" value={email}
                      onChange={handleChange} required/>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password" className="form-control" id="password" placeholder="Password" value={password}
                      onChange={handleChange} required />
                  </div>

                  <div className="checkbox mt-2 mb-3">
                    <label>
                      <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                  </div>
                  <button className="w-100 btn btn-secondary text-white " type="submit">Login</button>
                  <p className="mt-4 mb-3 text-center"><a href="#">Forgot password</a></p>
                </form>

                <p className="mt-2 mb-3 text-center">Don’t have an account? <Link to='/register'>Signup</Link></p>

              </div>

              <div className="col-md-7">
                <img src={hero} className="img-fluid" width="100%" alt="Image Hero" />
              </div>

            </div>

          </div>

      </section>
    </>
  )
}

export default Login;
