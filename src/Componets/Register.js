/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'


export default class Register extends Component {
  render() {
    return (
      <div>
        <section className="d-flex mh-100 align-items-center min-vh-100">
          <div className="container">
            <div className="row justify-content-center bg-primary rounded-3 align-items-center my-5">
              <div className="col-5 rounded-3 p-3">
                  <h2>Healthy Home Made Food Made With Love For You</h2>
              </div>

              <div className="col-7 bg-white rounded-3 shadow border p-5">
                  <form>
                    <div className="text-center mb-3">
                      <p>Create Account</p>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="text" id="registerName" className="form-control" placeholder='Full Name' />
                      {/* <label className="form-label" for="registerName">Name</label> */}
                    </div>
                    <div className="form-outline mb-4">
                      <input type="email" id="registerEmail" className="form-control" placeholder='Email' />
                      {/* <label className="form-label" for="registerEmail">Email</label> */}
                    </div>


                    <div className="form-outline mb-4">
                      <input type="password" id="registerPassword" className="form-control" placeholder='Password' />
                      {/* <label className="form-label" for="registerPassword">Password</label> */}
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="registerRepeatPassword" className="form-control" placeholder='Confirms Password' />
                      {/* <label className="form-label" for="registerRepeatPassword">Repeat password</label> */}
                    </div>


                    <div className="form-check d-flex justify-content-center mb-4">
                      <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                        aria-describedby="registerCheckHelpText" />
                      <label className="form-check-label" for="registerCheck">
                        I have read and agree to the terms of services and privacy policy.
                      </label>
                    </div>
                    <button type="submit" className="btn btn-block mb-3 btn-color">Create Account</button>
                  </form>
                  <p className="text-center">or</p>
                  <div className="row">
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
                    <p>Already have an account? Log In </p>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
