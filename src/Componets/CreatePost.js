/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { useRef, useState} from 'react';

const CreatePost = () => {

    const [imgsrc, setImgsrc] = useState("");

    let incrementNum = [];
    for (let i = 1; i <= 20; i++) {
        incrementNum.push(i);
    }


    let formFile = useRef(null);
    let imgFrame = useRef(null);
    // let src= "";

    const previewUploadedImage = (event) => {
        console.log("Hello", event.target.files[0])
        setImgsrc(event.target.files[0])
       
    }
    
   const imagePreview=imgsrc && URL.createObjectURL(imgsrc);

    const clearImage = (event) => {
        console.log("Hello", formFile)
        formFile.value = "";
        imgFrame.src = "";
        setImgsrc("");
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <h1>Create post</h1>
                <div className="col-md-8 col-md-2">

                    <form action="" method="POST">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Title</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="name" className="form-label">Food Creator Name</label>
                            <input type="email" className="form-control" id="name" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label for="time" className="form-label">Time Slot</label>
                            <input type="email" className="form-control" id="time" placeholder="Time Slot" />
                        </div>
                        <div className="form-group">
                            <label for="quantity" className="form-label">Total Quanity</label>
                            {/* <label for="exampleFormControlInput1" className="form-label">Quantity</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Time Slot" /> */}
                            <select className="form-select" aria-label="Default select example" defaultValue='1'>
                                <option>Total Quanity</option>
                                {incrementNum.map((incNum) => <option value="1">{incNum}</option>)}
                            </select>
                        </div>

                        <div className="form-group">
                            <label for="time" className="form-label">Time Slot</label>
                            <input type="email" className="form-control" id="time" placeholder="Time Slot" />
                        </div>
                        <div>
                            <div className='row mt-5 mb-3'>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Italian
                                    </label>
                                </div>
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
                                        Italian
                                    </label>
                                </div>
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

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Preview
                            </button>
                        </div>


                    </form>
                </div>
                <div className='col-md-4 col-md-2'>
                    <p>Specials</p>
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
                    <div className='mt-5'>
                        <div className="container col-md-6">
                            <div className="mb-5">
                                {/* <label for="Image" className="form-label">Bootstrap 5 image Upload with Preview</label> */}
                                <input className="form-control-lg" type="file" ref={formFile} onChange={previewUploadedImage} />
                                {/* <button onClick={preview}>Done</button> */}
                                <button onClick={clearImage} className="btn btn-primary mt-3">Change</button>
                            </div>
                            <div>
                            <img ref={imgFrame} src={imagePreview}/>
                            </div>
                           
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}


export default CreatePost;