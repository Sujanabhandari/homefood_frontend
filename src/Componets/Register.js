/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */

import React from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { useHomeContext } from './MainContext';
import { toast } from "react-toastify";
import { registerUser } from '../utils/userData';
import PacmanLoader from "react-spinners/ClipLoader";
import { useState } from 'react';

const override = {
  display: "block",
  margin: "0 auto",
  position: "fixed",
  top: "50%",
  left: "50%",
  borderWidth: "3px"
};


const Register = () => {

  const { registerFormState, setRegisterFormState } = useHomeContext();
  let formFile = useRef(null);
  let imgFrame = useRef(null);
  let [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setRegisterFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData();
      formData.append('userName', registerFormState.userName);
      formData.append('email', registerFormState.email);
      formData.append('password', registerFormState.password);
      formData.append('profilePic', registerFormState.profilePic);
      if (!registerFormState.userName || !registerFormState.password || !registerFormState.email)
        return alert("Please fill out all the fields");

      const {data, error} = await registerUser(
        formData
      );
      toast.success("Congratulations! Your Account is created.")
      if (error) {
        throw new Error(error.response?.data.error || error.message);
      }
      setLoading(false);
      navigate('/login', { replace: true });
    }
    catch (error) {
      setLoading(false)
      toast.error( error.response.data.message)
    }
  };

  const previewUploadedImage = (event) => {
    setRegisterFormState((prev) => ({ ...prev, profilePic: event.target.files[0] }));
  }

  const imagePreview = registerFormState.profilePic && URL.createObjectURL(registerFormState.profilePic);

  return (
    <>
      <section className="register col-lg-8 mx-auto">
      <PacmanLoader
                color={"#e8dd61"}
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
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
                    <input className="form-control mb-3" type="file" ref={formFile} id="profilePic" onChange={previewUploadedImage} required />
                    <div className="wrapperImg d-block d-md-inline-block mx-auto input-group has-validation">
                      {imagePreview ? <img ref={imgFrame} src={imagePreview} required /> : <p></p>}
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
