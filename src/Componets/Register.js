/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
export default class Register extends Component {
  render() {
    return (
      <div>
        <section className="d-flex mh-100 align-items-center min-vh-100">
          <div className="container">
            <div className="row justify-content-center bg-primary rounded-3 align-items-center my-5">
              <div className="col-md-5 rounded-3 p-5">
                <h2>Healthy Home Made Food Made With Love For You</h2>
              </div>

              <div className="col-md-7 bg-white rounded-3 shadow border p-5 text-center">
                <img className="mb-4 mx-auto d-block" src={logo} width="70px" alt="Logo HomeMade" />
                <div className="text-center mb-3">
                  <h3>Create Account</h3>
                </div>
                <form className='w-75 mx-auto'>
                  <div className="text-center">
                    <div className="form-outline mb-4">
                      <input type="text" id="registerName" className="form-control" placeholder='Full Name' />

                    </div>
                    <div className="form-outline mb-4">
                      <input type="email" id="registerEmail" className="form-control" placeholder='Email' />

                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="registerPassword" className="form-control" placeholder='Password' />

                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="registerRepeatPassword" className="form-control" placeholder='Confirm Password' />

                    </div>
                  </div>


                  <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input p-2 me-2" type="checkbox" value="" id="registerCheck" checked
                      aria-describedby="registerCheckHelpText" />
                    <label className="form-check-label" for="registerCheck">
                      I have read and agree to the terms of services and privacy policy.
                    </label>
                  </div>

                  <button type="submit" className="btn btn-block mb-3 btn-color">Create Account</button>

                </form>
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
}
