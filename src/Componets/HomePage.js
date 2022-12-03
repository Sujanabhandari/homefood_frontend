/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Categories from './Categories.js';
import Post from './Post.js';
import MyCarousel from '../utils/MyCarousel.js';
const Home = ({posts}) => {
  return (
    <>
      <MyCarousel posts={posts}/>
        <Categories posts={posts}/>
      <Post posts={posts}/>
    </>
  );
};


export default Home;
