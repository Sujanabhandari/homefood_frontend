/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function TopCarousel({posts}) {
    console.log("Posts from carousel", posts)
  return (
        <Carousel className='d-flex justify-content-center'>
                <div>
                    <img src="/logo192.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src="/logo192.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src="/logo192.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
  )
}
