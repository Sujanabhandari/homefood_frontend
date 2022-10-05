/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import * as React from "react";
import { useHomeContext } from './MainContext';

const Post = () => {

  const { posts } = useHomeContext();

  const sorryMessage = () => {
    if (!posts.length)
    {
      return <div className="text-center">
      <h2>Sorry there is no dish in this category.</h2>
    </div>
    }
    
  }
  return (
    <>
      <section className="album">
        <div className="container px-0">
        {sorryMessage()}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {posts?.map((post, index) => (

              <div className="col" key={index}>
                {post.quantity ?
                  <div className="card shadow-sm soldOut">
                    <div className="overlay">
                      <Link to={`/offers/${post._id}`}>
                        <div className="foodQuantity">{post.quantity} meals left</div>
                        <div className="featured">{post.categories}</div>
                        <div className="wrapperImg">
                          <img src={post.image} />
                        </div>
                      </Link>

                      <div className="card-body">
                        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-3">
                          <div className="col-lg-6 col-md-8">
                            <div className="card-text foodTitle">{post.title}</div>
                            <div className="foodTime"><i className="bi bi-clock"></i> Collect: {post.timeSlot}</div>
                            <div className="price">{post.price} </div>
                          </div>
                          <div className="col-lg-6 col-md-8 text-end">
                            <Link className="btn btn-sm btn-outline-secondary reserve" to={`/offers/${post._id}`}>
                              <i className="bi bi-bag"></i> Reserve meal
                            </Link>
                            <div className="foodAddress"><i className="bi bi-geo-alt-fill"></i> {post.address}</div>
                            <div className="foodCreator"><i className="bi bi-person"></i> {post.creatorId?.userName}</div>
                          </div>
                        </div>
                        {post.specials?.map((special, index) => (
                          <i className="bi bi-tag-fill" key={index}> {special}</i>
                        ))}

                      </div>

                    </div>
                  </div>
                  : <div className="card shadow-sm soldout">
                    <div className="overlay">
                      <Link to={`/offers/${post._id}`}>
                        <div className="foodQuantity">{post.quantity} meals left</div>
                        <div className="featured">{post.categories}</div>
                        <div className="wrapperImg">
                          <img src={post.image} />
                        </div>
                      </Link>

                      <div className="card-body">
                        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-3">
                          <div className="col-lg-6 col-md-8">
                            <div className="card-text foodTitle">{post.title}</div>
                            <div className="foodTime"><i className="bi bi-clock"></i> Collect: {post.timeSlot}</div>
                            <div className="price">{post.price} </div>
                          </div>
                          <div className="col-lg-6 col-md-8 text-end">
                            <button type="button" className="btn btn-sm btn-outline-secondary reserve">
                              <i className="bi bi-bag"></i> Reserve meal
                            </button>
                            <div className="foodAddress"><i className="bi bi-geo-alt-fill"></i> {post.address}</div>
                            <div className="foodCreator"><i className="bi bi-person"></i> {post.creatorId?.userName}</div>
                          </div>
                        </div>
                        {post.specials ? (
                          <div className="row mt-2">
                            <div className="col"><span className="tag"><i className="bi bi-tag-fill"></i> {post.specials}</span></div>
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>

                    </div>
                  </div>
                }

              </div>

            ))}
          

          </div>

        </div>

      </section>
    </>
  );
};

export default Post;
