/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import logo from '../assets/logo.png';
import hero from '../assets/hero-image.png';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useHomeContext } from './MainContext';
import { toast } from 'react-toastify';
import { loginUser } from '../utils/userData';
import PacmanLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  position: "fixed",
  top: "50%",
  left: "50%",
  borderWidth: "3px"
};

const Login = () => {

  const [{ email, password }, setLoginFormState] = useState({
    email: "",
    password: ""
  });
  let [loading, setLoading] = useState(false);

  const { setIsAuthenticated, setToken } = useHomeContext();
  const handleChange = (e) =>
    setLoginFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const {error, headers} = await loginUser({ email, password });
      if (error) {
        throw new Error(error.response?.data.message);
      }
      localStorage.setItem("token", headers.token);
      setToken(headers.token);
      setIsAuthenticated(true);
      setLoading(false)
      toast.success("Welcome to home Page")
      navigate('/', { replace: true });

    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  };

  return (
    <>
      <section className="login col-lg-8 mx-auto">
      <PacmanLoader
                color={"#e8dd61"}
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />

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
