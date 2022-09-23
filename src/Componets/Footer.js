import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="bg-primary text-center text-white pb-0">

                    <div className="container p-5">
                        <h4 className='mb-3'>Connect with us</h4>
                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3 text-center d-d-flex flex-row">
                            <div className="col order-last order-md-first">
                                <div className="text-center" >
                                    © 2022 Copyright: HomemadeFood
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
                            <div className="col order-md-last  my-3">
                                <p>Data Protection | Legal Notice</p>
                            </div>
                        </div>
                    </div>
                </footer >
            </div >
        )
    }
}
