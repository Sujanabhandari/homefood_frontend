/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import Flag from 'react-world-flags'
import { useEffect } from 'react';
import axios from 'axios';
import { useHomeContext} from '../Componets/MainContext';
import ButtonGroup from './ButtonGroup';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Categories = () => {
  const { setPosts, setPrevPosts, searchCategory, setsearchCategory } = useHomeContext();

  const handleLinkClick = event => {
    return setsearchCategory(event.target.innerText);
  };

  useEffect(() => {
    const getCategoryPost = async () => {
      try {
        if (searchCategory) {
          const { data } = await axios.get(`https://home-made.onrender.com/offers?categories=${searchCategory}`);
          if (data) {
            setPrevPosts(data);
            setPosts(data);
          }
          else {
            setPosts([]);
          };
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
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
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
            <Flag code="cn" />

            <div className="mt-2">Chinese</div>
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
            <Flag code="kr" />

            <div className="mt-2">Korean</div>
          </div>
          <div className="catCard px-2 py-1 px-md-5 py-md-3 rounded d-inline-block" onClick={handleLinkClick}>
            <Flag code="np" />

            <div className="mt-2">Nepali</div>
          </div>
          <div className="catCard px-2 py-1 px-md-5 py-md-3 rounded d-inline-block" onClick={handleLinkClick}>
            <Flag code="ph" />

            <div className="mt-2">Romanian</div>
          </div>
          <div className="catCard px-2 py-1 px-md-5 py-md-3 rounded d-inline-block" onClick={handleLinkClick}>
            <Flag code="ch" />

            <div className="mt-2">Switzerland</div>
          </div>
        </Carousel>
      </div>

    </section>

  );
};

export default Categories;
