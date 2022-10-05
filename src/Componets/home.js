/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import SpecialOffer from './SpecialOffer.js';
import Categories from './Categories.js';
import Post from './Post.js';
import MyCarousel from '../utils/MyCarousel.js';
const Home = ({posts}) => {
  return (
    <>
      <MyCarousel posts={posts}/>
      {/* <SpecialOffer /> */}
      <Categories posts={posts}/>
      <Post posts={posts}/>
    </>
  );
};


export default Home;
