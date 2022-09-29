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
                <div className="container px-md-2">
                    <a className="navbar-brand" href="/"><img src={logo} width="48px" alt="Logo HomeMade" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     
                        <form className="d-flex mx-0 mx-md-auto d-noned-md-inline-flex search col col-md-6 order-1 order-md-2" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light text-white d-none d-md-inline-block" type="submit"><i class="bi bi-search-heart"></i></button>
                        </form>

                        <ul className="navbar-nav mb-2 mb-lg-0 d-flex order-2 order-md-1">
                            <li className="nav-item">
                                <Link to="/" className='nav-link text-white'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/my_account/order_history" className='nav-link text-white'>My Orders</Link>
                            </li>
                            {!isAuthenticated ? (
                            <></>
                            ) : ( <li className="nav-item"><Link className='nav-link text-white' to="/create_offer" title="Create Offer">Create Offer</Link></li> ) 
                            }
                        </ul>

                        <ul className="navbar-nav mb-2 mb-lg-0 d-none d-md-flex gap-3 justify-content-between align-items-center order-3">
                            {!isAuthenticated ? (
                            <>
                                <li className="nav-item">
                                   <Link to="/login" className="nav-link text-white">Login</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/register" className="nav-link text-white">Register</Link>
                                </li>
                            </>
                            ) : (
                            <>
                                <li className="nav-item">
                                    <Link className='text-white' to='/my_account' title="My Account">
                                        <div className="wrapperImg d-block d-md-inline-block mx-auto">
                                            <img className="icon-circle-img" src={user?.profilePic} alt="User" />
                                        </div>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='text-white' title="Logout">
                                        <i className="bi bi-box-arrow-right icon-circle" onClick={logout}></i>
                                    </Link>
                                </li>    
                            </>
                            )}
                        </ul>

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex d-md-none gap-3 justify-content-between align-items-start w-100 order-3">

                            {!isAuthenticated ? (
                            <>
                                <li className="nav-item">
                                   <Link to="/login" className="nav-link text-white">Login</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/register" className="nav-link text-white">Register</Link>
                                </li>
                            </>
                            ) : (
                            <>
                                <li className="nav-item">
                                    <Link className='text-white' to='/my_account' title="My Account"><i class="bi bi-person"></i> My Account</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='text-white' title="Logout" onClick={logout} ><i className="bi bi-box-arrow-right"></i> Logout</Link>
                                </li>    
                            </>    
                            )}
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    )

}


export default Navbar;
