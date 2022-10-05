/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import logo from '../assets/logo.png';
import hero from '../assets/hero-image.png';
import { useState } from 'react';
import { loginUser } from "../utils/regitsterUser";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useHomeContext } from './MainContext';

const Login = () => {

  const [{ email, password }, setLoginFormState] = useState({
    email: "",
    password: ""
  });

  const { setIsAuthenticated, setToken} = useHomeContext();
  const [isError, setIsError] = useState(false);

  const handleChange = (e) =>
    setLoginFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if (!email || !password) return alert("Please fill out all the fields");
      const response = await loginUser({ email, password });
      localStorage.setItem("token", response.headers.token);
      setToken(response.headers.token);
      setIsAuthenticated(true);
      navigate('/', { replace: true });

    } catch (error) {
      console.log("From Error", error)
      setIsError(true);
    }
  };

  return (
    <>
      <section className="login col-lg-8 mx-auto">

        <div className="row justify-content-center bg-primary rounded-3 align-items-center">

          <div className="col-md-5 rounded-3 p-5">
            <img src={hero} className="img-fluid" width="100%" alt="Image Hero" />
          </div>

          <div className="col-md-7 bg-white rounded-3 shadow border p-5 text-center-7">
            <form onSubmit={handleSubmit}>
              <img className="mb-4 mx-auto d-block" src={logo} width="70px" alt="Logo HomeMade" />

              <h1 className="h3 mb-3 fw-bold mt-5">Login</h1>
              <p>Sign in with your data that you entered during your registration.</p>

              <div className="form-outline mb-4">
                <input type="email" className="form-control" id="email" placeholder="name@example.com" value={email}
                  onChange={handleChange} required />
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

              {isError && (
              <span className="text-rose-600 text-danger">
                Invalid credentials - please double check email/password
              </span>
              // <p>hello</p>
            )}

              <button className="w-100 btn btn-secondary text-white " type="submit">Login</button>
              <p className="mt-4 mb-3 text-center"><a href="#">Forgot password</a></p>
            </form>
            <p className="mt-2 mb-3 text-center">Don’t have an account? <Link to='/register'>Signup</Link></p>
          </div>

        </div>

      </section>
    </>
  )
}

export default Login;
