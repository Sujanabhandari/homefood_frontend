/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import SpecialOffer from './SpecialOffer.js';
import Categories from './Categories.js';
import Post from './Post.js';


const Home = ({posts}) => {
  return (
    <>
      <SpecialOffer />
      <Categories />
      <Post posts={posts}/>
    </>

  );
};

export default Home;
