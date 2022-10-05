/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import SpecialOffer from './SpecialOffer.js';
import Categories from './Categories.js';
import Tags from './Tags.js';
import Post from './Post.js';

const Home = ({posts}) => {
  return (
    <>
      <SpecialOffer />
      <Categories posts={posts}/>
      <Tags posts={posts}/>
      <Post posts={posts}/>
    </>
  );
};

export default Home;
