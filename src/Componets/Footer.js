import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
                <footer className="bg-primary text-white py-4 mt-auto">

                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3 d-d-flex flex-row justify-content-between align-items-center">
                            <div className="col order-last order-md-first text-center text-md-start">
                                <div>
                                    © 2022 Copyright HomemadeFood
                                </div>
                            </div>

                            <div className="col order-first text-center">
                                <div className='row'>
                                    <div className='col'>
                                        <i className="bi bi-envelope" style={{ fontSize: "25px", color: "black" }} ></i>
                                    </div>
                                    <div className='col'>
                                        <i className="bi bi-discord" style={{ fontSize: "25px", color: "wchite" }}></i>
                                    </div>
                                    <div className='col'>
                                        <i className="bi bi-github" style={{ fontSize: "25px", color: "black" }}></i>
                                    </div>
                                    <div className='col'>
                                        <i className="bi bi-instagram" style={{ fontSize: "25px", color: "#8a3ab9" }}></i>
                                    </div>
                                </div>


                            </div>
                            <div className="col order-md-last text-center text-md-end">
                                <Link to="#" className="text-white">Data Protection</Link> | <Link to="#" className="text-white">Legal Notice</Link>
                            </div>
                        </div>
                    </div>
                </footer >
        )
    }
}
