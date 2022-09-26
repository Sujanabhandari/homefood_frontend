/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo-white.png';
import girl from '../assets/girl.png';
import { useHomeContext } from './MainContext';

 
const Navbar = ({ logout }) => {

    const { registerFormState, isAuthenticated, user } = useHomeContext();

    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="/"><img src={logo} width="48px" alt="Logo HomeMade" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <Link className='nav-link text-white' to="/create_offer">Create Offer</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className='nav-link text-white'>Deals</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className='nav-link text-white'>My Orders</Link>
                            </li>
                            <form className="d-flex ms-4" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-light text-white" type="submit">Search</button>
                            </form>
                        </ul>


                        <div className="d-flex gap-3 m-3 align-items-center">

                            {!isAuthenticated ? (
                                <>

                                    <Link to="/login" className="nav-link active text-white">
                                        Login
                                    </Link>


                                    <Link to="/register" className="nav-link active text-white">
                                        Register
                                    </Link>

                                </>
                            ) : (
                                <>
                                     <Link className='nav-link text-white' to="/create_offer">Create Offer</Link>
                                    <Link className='text-white'><i className="bi bi-cart icon-circle" /></Link>
                                    <Link className='text-white' to='/my_account'>
                                        <img className="icon-circle-img" src={user?.profilePic} width="55px" alt="Person" />
                                    </Link>
                                    <Link className='text-white' >
                                        <i className="bi bi-box-arrow-right icon-circle" onClick={logout}></i>
                                    </Link>

                                </>
                            )}
                        </div>


                        <li className=" d-flex nav-item">
                        </li>
                    </div>
                </div>
            </nav>
        </header>
    )

}


export default Navbar;
