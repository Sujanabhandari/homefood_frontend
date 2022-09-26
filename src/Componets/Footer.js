import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
                <footer className="bg-primary text-center text-white py-3 mt-auto">

                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3 text-center d-d-flex flex-row align-items-center">
                            <div className="col order-last order-md-first">
                                <div className="text-center" >
                                    © 2022 Copyright HomemadeFood
                                </div>
                            </div>

                            <div className="col text-center order-first">
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
                            <div className="col order-md-last">
                                <Link to="#" className="text-white">Data Protection</Link> | <Link to="#" className="text-white">Legal Notice</Link>
                            </div>
                        </div>
                    </div>
                </footer >
        )
    }
}
