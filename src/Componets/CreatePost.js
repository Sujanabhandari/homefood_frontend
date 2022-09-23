/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { useRef, useState } from 'react';
import { create_offer } from "../utils/createOffer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useHomeContext } from './MainContext';
import {handleFormData} from '../utils/handleFormData';

const CreatePost = () => {
    // console.log(handleSubmit())
    const {formState, setFormState}  = useHomeContext();

    let formFile = useRef(null);
    let imgFrame = useRef(null);

    const handleChange = (e) => {

        console.log(e.target.name)
        if (e.target.name === 'specials') {
            setFormState((prev) => {
               
                return ({ ...prev, specials: [...prev.specials, e.target.value] })
            })
        }
        else setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }


    const previewUploadedImage = (event) => {
        console.log("From OFEER LIST", event.target.files[0]);
        setFormState((prev) => ({ ...prev, image: event.target.files[0] }));
    }

    const imagePreview = formState.image && URL.createObjectURL(formState.image);


    const navigate = useNavigate();


    // navigate(`/`, { replace: true });

     const handleSubmit = async (e) => {
        try {

            const formData = handleFormData(formState)

    const { data } = await axios.post(
        `http://localhost:3000/offers`,
        formData
       

    );
     navigate(`/`);
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <div className="container">
            {/* <form method='POST' action='/publish_post' onSubmit={handleSubmit}> */}
            <form onSubmit={handleSubmit}>
                <div className="row mt-5">

                    <h4 className='fs-2 mb-4 fw-bolder'>Create post</h4>
                    <div className="col-md-8 col-md-2">
                        <div className="form-group mb-4">
                            <label for="title" className="form-label fs-5 fw-bold">Title</label>
                            {/* <p className=''>Title</p> */}
                            <input type="text" value={formState.title} onChange={handleChange} className="form-control" name="title" id="title" placeholder="Title" />
                        </div>
                        <div className="form-group mb-4">
                            <label for="description" className="form-label fs-5 fw-bold">Description</label>
                            <textarea className="form-control" id="description" rows="3" value={formState.description} name="description" onChange={handleChange}></textarea>
                        </div>
                        <div className="form-group mb-4">
                            <label for="timeSlot" className="form-label fs-5 fw-bold">Time Slot</label>
                            <input type="text" className="form-control" id="timeSlot" placeholder="Time Slot" name="timeSlot" value={formState.timeSlot} onChange={handleChange} />
                        </div>
                        <div className="form-group mb-4">
                            <label for="address" className="form-label fs-5 fw-bold">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="Address" name="address" value={formState.address} onChange={handleChange} />
                        </div>
                        <div className="form-group mb-4">
                            <label for="price" className="form-label fs-5 fw-bold">Price</label>
                            <input type="text" className="form-control" id="price" placeholder="Price" name="price" value={formState.price} onChange={handleChange} />
                        </div>

                        <div className="form-group mb-4">
                            <label for="quantity" className="form-label fs-5 fw-bold">Total Quanity</label>
                            <input type="number" className="form-control" id="quantity" placeholder="Quantity" name="quantity" value={formState.quantity} onChange={handleChange} />
                        </div>
                        <div>
                            <p className='fs-5 fw-bold mt-3'>Categories</p>
                            <div className='row mb-3'>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" id="Greek" name="categories" value="Greek" onChange={handleChange} />
                                    <label className="form-check-label" for="Greek">
                                        Greek
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" id="Indian" name="categories" value="Indian" onChange={handleChange} />
                                    <label className="form-check-label" for="Indian">
                                        Indian
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" id="Nepali" name="categories" value="Nepali" onChange={handleChange} />
                                    <label className="form-check-label" for="Nepali">
                                        Nepali
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" id="Romanian" name="categories" value="Nepali" onChange={handleChange} />
                                    <label className="form-check-label" for="Romanian">
                                        Romanian
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" id="German" name="categories" value="German" onChange={handleChange} />
                                    <label className="form-check-label" for="German">
                                        German
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" id="Italian" name="categories" value="Italian" onChange={handleChange} />
                                    <label className="form-check-label" for="Italian">
                                        Italian
                                    </label>
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" id="Spanish" name="categories" value="Spanish" onChange={handleChange} />
                                    <label className="form-check-label" for="Spanish">
                                        Spanish
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" id="Philippines" name="categories" value="Philippines" onChange={handleChange} />
                                    <label className="form-check-label" for="Philippines">
                                        Philippines
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" id="Japanese" name="categories" value="Japanese" onChange={handleChange} />
                                    <label className="form-check-label" for="Japanese">
                                        Japanese
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" id="Chinese" name="categories" value="Chinese" onChange={handleChange} />
                                    <label className="form-check-label" for="Chinese">
                                        Chinese
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" id="Switzerland" name="categories" value="Switzerland" onChange={handleChange} />
                                    <label className="form-check-label" for="Switzerland">
                                        Switzerland
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" id="Korean" name="categories" value="Korean" onChange={handleChange} />
                                    <label className="form-check-label" for="Korean">
                                        Korean
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-md-2'>
                        <div>
                            <p className='fw-bolder'>Specials</p>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="specials" name="specials" value="Vegetarian" onChange={handleChange} />
                                <label className="form-check-label" for="Vegetarian">
                                    Vegetarian
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="Vegan" name="specials" value="Vegan" onChange={handleChange} />
                                <label className="form-check-label" for="Vegan">
                                    Vegan
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="MilkIntolerance" name="specials" value="Milk Intolerance" onChange={handleChange} />
                                <label className="form-check-label" for="MilkIntolerance">
                                    Milk Intolerance
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="OfferPackaging" name="specials" value="Offer Packaging" onChange={handleChange} />
                                <label className="form-check-label" for="OfferPackaging">
                                    Offer Packaging
                                </label>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <div className="col-md-6">
                                <div className="mb-5">
                                    <p className='fw-bold'>Upload you Profile Picture</p>
                                    <img ref={imgFrame} className="" style={{ width: "200px" }} src={imagePreview} />
                                    <input className="form-control mt-3" type="file" ref={formFile}
                                        id="image"
                                        onChange={previewUploadedImage}
                                    />
                                    {/* <button onClick={changeImage} className="btn btn-primary mt-3 btn-secondary text-white">Change</button> */}
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-secondary text-white ">
                                Publish Your Post
                            </button>
                            <Link to='/offer_preview' state={{ formState: formState, imagePreview }} className="btn btn-secondary text-white ms-5">
                                Preview Your Post
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default CreatePost;