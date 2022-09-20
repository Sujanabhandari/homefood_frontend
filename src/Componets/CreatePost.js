/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { useRef, useState } from 'react';

const CreatePost = () => {

    const [imgsrc, setImgsrc] = useState("");

    let incrementNum = [];
    for (let i = 1; i <= 20; i++) {
        incrementNum.push(i);
    }
    //useRef hook

    let formFile = useRef(null);
    let imgFrame = useRef(null);

    const previewUploadedImage = (event) => {
        setImgsrc(event.target.files[0])
    }

    const imagePreview = imgsrc && URL.createObjectURL(imgsrc);

    const changeImage = (event) => {
        console.log(formFile.value)
        formFile.value = "";
        imgFrame.src = "";
        setImgsrc("");
    }
    return (
        <div className="container">
            <form method='POST' action='/publish_post'>
            <div className="row mt-5">
               
                <h4 className='fs-2 mb-4 fw-bolder'>Create post</h4>
                <div className="col-md-8 col-md-2">
                    <div className="form-group mb-4">
                        <label for="exampleFormControlInput1" className="form-label fs-5 fw-bold">Title</label>
                        {/* <p className=''>Title</p> */}
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
                    </div>
                    <div className="form-group mb-4">
                        <label for="exampleFormControlTextarea1" className="form-label fs-5 fw-bold">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group mb-4">
                        <label for="name" className="form-label fs-5 fw-bold">Food Creator Name</label>
                        <input type="email" className="form-control" id="name" placeholder="Your Name" />
                    </div>
                    <div className="form-group mb-4">
                        <label for="time" className="form-label fs-5 fw-bold">Time Slot</label>
                        <input type="email" className="form-control" id="time" placeholder="Time Slot" />
                    </div>
                    <div className="form-group mb-4">
                        <label for="quantity" className="form-label fs-5 fw-bold">Total Quanity</label>
                        {/* <label for="exampleFormControlInput1" className="form-label">Quantity</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Time Slot" /> */}
                        <select className="form-select" aria-label="Default select example" defaultValue='1'>
                            <option>Total Quanity</option>
                            {incrementNum.map((incNum) => <option value="1">{incNum}</option>)}
                        </select>
                    </div>

                    <div className="form-group">
                        <label for="time" className="form-label fs-5 fw-bold">Time Slot</label>
                        <input type="email" className="form-control" id="time" placeholder="Time Slot" />
                    </div>
                    <div>
                        <p className='fs-5 fw-bold mt-3'>Categories</p>
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
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Vegetarian
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" for="flexCheckChecked">
                                Vegan
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Milk Intolerance
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" for="flexCheckChecked">
                                Offer Packaging
                            </label>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <div className="col-md-6">
                            <div className="mb-5">
                                <p className='fw-bold'>Upload you Profile Picture</p>
                                <img ref={imgFrame} className="rounded-circle" style={{ width: "200px" }} src={imagePreview} />
                                <input className="form-control mt-3" type="file" ref={formFile} onChange={previewUploadedImage} />
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