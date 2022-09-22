/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import logo from '../assets/logo.png';
import hero from '../assets/hero-image.png';
import { useRef, useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import { loginUser } from "../utils/regitsterUser";
import { NavLink, Routes, Route, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = ({ isAuthenticated, setIsAuthenticated, setToken }) => {
  const [{ email, password }, setFormState] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!email || !password) return alert("Please fill out all the fields");

      const response = await loginUser({ email, password });
      console.log("Fromm Login", response.headers);

      localStorage.setItem("token", response.headers.token);
      setToken(response.headers.token);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error)
      // toast.error(error.message);
    }
  };
  if (isAuthenticated) return <Navigate to="/" replace />;


  return (
    <>
      <main className="login-page" style={{marginTop: "200px"}}>
        
          <div className="col-lg-8 mx-auto p-4 py-md-5">

            <div className="row g-5">

              <div className="col-md-5 py-2 login rounded-3 shadow border">
                <form onSubmit={handleSubmit}>
                  <img className="mb-4 mx-auto d-block" src={logo} width="70px" alt="Logo HomeMade" />

                  <h1 className="h3 mb-3 fw-bold mt-5">Login</h1>
                  <p>Sign in with your data that you entered during your registration.</p>

                  <div className="form-floating">
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" value={email}
                      onChange={handleChange} />
                    <label for="email">Email address</label>
                  </div>
                  <div className="form-floating mt-2">
                    <input type="password" className="form-control" id="password" placeholder="Password" value={password}
                      onChange={handleChange} />
                    <label for="password">Password</label>
                  </div>

                  <div className="checkbox mt-2 mb-3">
                    <label>
                      <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                  </div>
                  <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                  <p className="mt-5 mb-3 text-center"><a href="#">Forgot password</a></p>
                </form>

                <p className="mt-5 mb-3 text-center">Don’t have an account? <Link to='/register'>Signup</Link></p>

              </div>

              <div className="col-md-7">
                <img src={hero} className="img-fluid" width="100%" alt="Image Hero" />
              </div>

            </div>

          </div>
      
      </main>
      <footer className="pt-5 my-5 text-muted border-top text-center">
        <p className="mt-5 mb-3 text-muted">
          &copy; 2022 HandMade
          <br />
          <a href="legal-notice.html">Legal Notice</a> | <a href="data-protection.html">Data Protection</a>
        </p>
      </footer>
    </>
  )
}

export default Login;
