/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { useRef, useState } from 'react';
import { create_offer } from "../utils/createOffer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {

    const [imgsrc, setImgsrc] = useState("");

    const [{ title, description, quantity, image, price, timeSlot, specials }, setFormState] = useState({
        title: "",
        description: "",
        quantity: "",
        image: "",
        price: "",
        timeSlot: "",
        specials: ""
        // specials: ""
    });

    let incrementNum = [];
    for (let i = 1; i <= 20; i++) {
        incrementNum.push(i);
    }
    // useRef hook

    let formFile = useRef(null);
    let imgFrame = useRef(null);

    const handleChange = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

    const previewUploadedImage = (event) => {
        // handleChange();
        setImgsrc(event.target.files[0])
    }

    const imagePreview = imgsrc && URL.createObjectURL(imgsrc);

    const changeImage = (event) => {
        console.log(formFile.value)
        formFile.value = "";
        imgFrame.src = "";
        setImgsrc("");
    }


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            // if (!title || !description || !quantity || !image || !price || !timeSlot || specials)
            //     return alert("Please fill out all the fields");

            const { data } = await axios.post(
                `http://localhost:3000/offers`,
                {
                    title,
                    description,
                    quantity,
                    image,
                    price,
                    timeSlot,
                    specials
                },
                // { headers: { Authorization: localStorage.getItem("token") } }
            );
            navigate(`/home`, { replace: true });
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
                            <input type="text" value={title} onChange={handleChange} className="form-control" id="title" placeholder="Title" />
                        </div>
                        <div className="form-group mb-4">
                            <label for="description" className="form-label fs-5 fw-bold">Description</label>
                            <textarea className="form-control" id="description" rows="3" value={description} onChange={handleChange}></textarea>
                        </div>
                        <div className="form-group mb-4">
                            <label for="timeSlot" className="form-label fs-5 fw-bold">Time Slot</label>
                            <input type="text" className="form-control" id="timeSlot" placeholder="Time Slot" value={timeSlot} onChange={handleChange} />
                        </div>
                        <div className="form-group mb-4">
                            <label for="price" className="form-label fs-5 fw-bold">Price</label>
                            <input type="text" className="form-control" id="price" placeholder="Price" value={price} onChange={handleChange}/>
                        </div>

                        <div className="form-group mb-4">
                            <label for="quantity" className="form-label fs-5 fw-bold">Total Quanity</label>
                            <input type="number" className="form-control" id="quantity" placeholder="Quantity" value={quantity} onChange={handleChange} />
                            {/* <select className="form-select" aria-label="Default select example" defaultValue='1'>
                                <option>Total Quanity</option>
                                {incrementNum.map((incNum) => <option value="1">{incNum}</option>)}
                            </select> */}
                        </div>
                        <div>
                            <p className='fs-5 fw-bold mt-3'>Categories</p>
                            <div className='row mb-3'>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" onChange={handleChange} />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Greek
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Indian
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Nepali
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Romanian
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        German
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Italian
                                    </label>
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Greek
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Indian
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Nepali
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Romanian
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        German
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Italian
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-md-2'>
                        <div>
                            <p className='fw-bolder'>Specials</p>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="specials" value="Vegetarian" onChange={handleChange} />
                                <label className="form-check-label" for="specials">
                                    Vegetarian
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="specials" value="Vegan" onChange={handleChange} />
                                <label className="form-check-label" for="specials">
                                    Vegan
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="specials" value="Milk Intolerance" onChange={handleChange} />
                                <label className="form-check-label" for="specials">
                                    Milk Intolerance
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="specials" value=" Offer Packaging" onChange={handleChange} />
                                <label className="form-check-label" for="specials">
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
                                        // onChange={previewUploadedImage} 
                                        id="image"
                                        onChange={handleChange}
                                        value={image}/>
                                    <button onClick={changeImage} className="btn btn-primary mt-3 btn-secondary text-white">Change</button>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-secondary text-white">
                                Publish Your Post
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )

}


export default CreatePost;