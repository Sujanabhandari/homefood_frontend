/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import Flag from 'react-world-flags'
import { useState, useEffect, useRef } from 'react';
import { useSearchParams, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useHomeContext, prevPosts } from '../Componets/MainContext';
import ButtonGroup from './ButtonGroup';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Categories = () => {
  const { posts, setPosts, prevPosts, setPrevPosts, searchCategory, setsearchCategory } = useHomeContext();

  let searchRef = useRef(null)

  const handleLinkClick = event => {
    return setsearchCategory(event.target.innerText);
  };
  console.log(searchCategory);

  useEffect(() => {
    const getCategoryPost = async () => {
      try {
        if (searchCategory) {
          const { data } = await axios.get(`http://localhost:3000/offers?categories=${searchCategory}`);
          console.log("Fetched Data", data);
          if (data) {
            //stores the previous post and shows the data based on that category
            setPrevPosts(data);
            console.log("From category", data)
            setPosts(data);
          }
          else setPosts([]);
        }

      } catch (error) {
        setPosts([]);
        console.error(error);
      }
    };
    getCategoryPost();
  }, [searchCategory]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="container mb-5 px-0">
      {/* <ButtonGroup /> */}
      <div className="row">

        <Carousel responsive={responsive} arrows={false} customButtonGroup={<ButtonGroup />} >
          <div className="catCard px-2 py-1 px-md-5 py-md-3 rounded d-inline-block" onClick={handleLinkClick}>
            <Flag code="it" />

            <div className="mt-2">Italian</div>
          </div>

          <div className="catCard px-2 py-1 px-md-5 py-md-3 rounded d-inline-block" onClick={handleLinkClick}>
            <Flag code="de" />

            <div className="mt-2">German</div>
          </div>

          <div className="catCard px-2 py-1 px-md-5 py-md-3 rounded d-inline-block" onClick={handleLinkClick}>
            <Flag code="gr" />

            <div className="mt-2">Greek</div>
          </div>

          <div className="catCard px-2 py-1 px-md-5 py-md-3 rounded d-inline-block" onClick={handleLinkClick}>
            <Flag code="es" />

            <div className="mt-2">Spanish</div>
          </div>

          <div className="catCard px-2 py-1 px-md-5 py-md-3 rounded d-inline-block" onClick={handleLinkClick}>
            <Flag code="mx" />

            <div className="mt-2">Mexican</div>
          </div>

          <div className="catCard px-2 py-1 px-md-5 py-md-3 rounded d-inline-block" onClick={handleLinkClick}>
            <Flag code="np" />

            <div className="mt-2">Nepali</div>
          </div>  
          </Carousel>
      </div>
      
    </section>

  );
};

export default Categories;
