/* eslint-disable react-hooks/exhaustive-deps */
import Flag from 'react-world-flags'
import { useState, useEffect, useRef } from 'react';
import { useSearchParams, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useHomeContext, prevPosts } from '../Componets/MainContext';

const Categories = () => {
  const { posts, setPosts, prevPosts, setPrevPosts, categoryPosts, setCategoryPosts, searchCategory, setsearchCategory } = useHomeContext();
  
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
            setPrevPosts(data);
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

  return (
    <section className="text-center container mb-5 px-0">
      <div className="row">

        <div className="d-flex justify-content-between">

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


        </div>

      </div>
    </section>

  );
};

export default Categories;
