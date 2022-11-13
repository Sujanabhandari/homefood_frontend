/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useRef, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useHomeContext } from './MainContext';
import { handleFormData } from '../utils/handleFormData';
import PacmanLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    margin: "0 auto",
    position: "fixed",
    top: "50%",
    left: "50%",
    borderWidth: "3px"
};

const CreatePost = () => {
    const { formState, setFormState, setPosts } = useHomeContext();
    let formFile = useRef(null);
    let imgFrame = useRef(null);
    let [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        if (e.target.name === 'specials') {
            setFormState((prev) => {
                return ({ ...prev, specials: [...prev.specials, e.target.value] })
            })
        }
        else setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const previewUploadedImage = (event) => {
        setFormState((prev) => ({ ...prev, image: event.target.files[0] }));
    }

    const imagePreview = formState.image && URL.createObjectURL(formState.image);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        try {
            //Solve error
            e.preventDefault();
            const formData = handleFormData(formState)
            setLoading(true);
            const { data } = await axios.post(
                `https://home-made.onrender.com/offers/create`,
                formData,
                {
                    headers: { 'Authorization': `${localStorage.getItem("token")}` }
                }

            );
            setPosts((prev) => [...prev, data]);
            setLoading(false);
            navigate(`/`, { replace: false });
            
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <section className="container createPost">
            <PacmanLoader
                color={"#e8dd61"}
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <h1 className="mb-3">Create post</h1>
                    <div className="col-md-8">
                        <div className="form-group mb-4">
                            <label htmlFor="title" className="form-label fw-bold">Title</label>
                            <input type="text" value={formState.title} onChange={handleChange} className="form-control" name="title" id="title" placeholder="Title *" required />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="description" className="form-label fw-bold">Description</label>
                            <textarea className="form-control" id="description" rows="3" value={formState.description} name="description" placeholder="Description *" onChange={handleChange} required ></textarea>
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="timeSlot" className="form-label fw-bold">Time Slot</label> <small>(example: 12.30-02:00 pm)</small>
                            <br />
                            <input type="text" className="form-control" id="timeSlot" placeholder="Time Slot *" name="timeSlot" value={formState.timeSlot} onChange={handleChange} required />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="address" className="form-label fw-bold">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="Address *" name="address" value={formState.address} onChange={handleChange} required />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="price" className="form-label fw-bold">Price</label> <small>(in €)</small>
                            <input type="text" className="form-control" id="price" placeholder="Price *" name="price" value={formState.price} onChange={handleChange} required />
                        </div>

                        <div className="form-group mb-4">
                            <label htmlFor="quantity" className="form-label fw-bold">Total Quanity</label>
                            <input type="number" className="form-control" id="quantity" placeholder="Quantity *" name="quantity" value={formState.quantity} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <p className='fw-bold mt-3'>Category *</p>
                            <div className='row mb-3 mx-0 row-cols-2 row-cols-md-4'>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" id="Greek" name="categories" value="Greek" onChange={handleChange} required />
                                    <label className="form-check-label" htmlFor="Greek">
                                        Greek
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" id="Indian" name="categories" value="Indian" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="Indian">
                                        Indian
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" id="Nepali" name="categories" value="Nepali" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="Nepali">
                                        Nepali
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" id="Romanian" name="categories" value="Nepali" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="Romanian">
                                        Romanian
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" id="German" name="categories" value="German" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="German">
                                        German
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" id="Italian" name="categories" value="Italian" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="Italian">
                                        Italian
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" id="Spanish" name="categories" value="Spanish" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="Spanish">
                                        Spanish
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" id="Mexican" name="categories" value="Mexican" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="Mexican">
                                        Mexican
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" id="Japanese" name="categories" value="Japanese" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="Japanese">
                                        Japanese
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" id="Chinese" name="categories" value="Chinese" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="Chinese">
                                        Chinese
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" id="Switzerland" name="categories" value="Switzerland" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="Switzerland">
                                        Switzerland
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="radio" id="Korean" name="categories" value="Korean" onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="Korean">
                                        Korean
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <p className='form-label fw-bold'>Specials</p>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="Vegetarian" name="specials" value="Vegetarian" onChange={handleChange} />
                                <label className="form-check-label" htmlFor="Vegetarian">
                                    Vegetarian
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="Vegan" name="specials" value="Vegan" onChange={handleChange} />
                                <label className="form-check-label" htmlFor="Vegan">
                                    Vegan
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="MilkIntolerance" name="specials" value="Milk Intolerance" onChange={handleChange} />
                                <label className="form-check-label" htmlFor="MilkIntolerance">
                                    Milk Intolerance
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="OfferPackaging" name="specials" value="Offer Packaging" onChange={handleChange} />
                                <label className="form-check-label" htmlFor="OfferPackaging">
                                    Offer Packaging
                                </label>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <div className="col-md-6">
                                <div className="mb-5">
                                    <p className='form-label fw-bold'>Upload you Profile Picture *</p>
                                    <input className="form-control mt-3 mb-3" type="file" ref={formFile} id="image" onChange={previewUploadedImage} required />
                                    <img ref={imgFrame} className="imagePreview" src={imagePreview} />
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
        </section>
    )
}


export default CreatePost;
