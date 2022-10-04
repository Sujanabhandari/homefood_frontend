/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo-white.png';
import girl from '../assets/girl.png';
import { useHomeContext } from './MainContext';
import { debounce, result } from 'lodash';

import { useState, useEffect, useRef } from 'react';

const Navbar = ({ logout }) => {
    const input_field = useRef(null);

    const { isAuthenticated, user, posts, setPosts, prevPosts } = useHomeContext();

    const [query, setQuery] = useState("");

    const handleChange = debounce(e => {
        setQuery(e.target.value);
    }, 150);

    useEffect(() => {
        if (query) {
            const result = prevPosts.filter(post =>
                post.title.toLowerCase().includes(query.toLowerCase()) || post.categories.toLowerCase().includes(query.toLowerCase()) ||
                post.address.toLowerCase().includes(query.toLowerCase()));
            setPosts(result);
        }
        else {
            setPosts(prevPosts);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

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
                            <input className="form-control me-2" type="search"
                                placeholder="Search" aria-label="Search"
                                onChange={handleChange}
                                ref={input_field}
                            />
                        </form>

                        <ul className="navbar-nav mb-2 mb-lg-0 d-flex order-2 order-md-1">
                            {!isAuthenticated ? (
                                <></>
                            ) : (<li className="nav-item"><Link className='nav-link text-white' to="/create_offer" title="Create Offer">Create Offer</Link></li>)
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
                                        <p className='text-white mt-2'>Hello {user?.userName}</p>
                                    </li>

                                    <li className="nav-item">
                                        <Link className='text-white' to='/my_account' title="My Account">
                                            <div className="wrapperImg d-block d-md-inline-block mx-auto">
                                                <img className="icon-circle-img" src={user?.profilePic} alt="User" />
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='text-white' title="Logout" to='/login'>
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
                                        <Link className='text-white' to='/my_account' title="My Account"><i className="bi bi-person"></i> My Account</Link>
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
