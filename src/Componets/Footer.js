import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="bg-primary text-center text-white pb-0">
                   
                    <div className="container p-5">
                        <h4 className='mb-2'>Connect with us</h4>
                        <div className="row text-center">
                            <div className="col">
                                <div className="text-center" >
                                    © 2020 Copyright:
                                    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                                </div>
                            </div>

                            <div className="col text-center">
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
                            <div className="col">
                                <p>Data Protection | Legal Notice</p>
                            </div>
                        </div>
                    </div>
                </footer >
            </div >
        )
    }
}
