/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import * as React from "react";
import { useState } from "react";

const Post = ({ posts }) => {
  console.log(posts);
  const { availableQuanity, setAvailiableQuanity } = useState();


  const availiableMeals = posts.map((post) => {
    return post.quantity - post.reserved_quantity
  });
  // console.log("Availiable Meals", availiableMeals[0]);

  if (availiableMeals[0] === 0) return console.log("Sold Out");


  return (
    <>
      <section className="album">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            {posts?.map((post, index) => (

              <div className="col" key={index}>

                <div className="card shadow-sm">
                  <Link to={`/offers/${post._id}`}>
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
                        {post.quantity ? <button type="button" className="btn btn-sm btn-outline-secondary reserve">
                          <i className="bi bi-bag"></i>{post.quantity} meals left</button> : 
                          <button type="button" className="btn btn-sm btn-outline-secondary reserve">Sold Out</button>}

                        <div className="foodAddress"><i className="bi bi-geo-alt-fill"></i> {post.address}</div>
                        <div className="foodCreator">Home Made by: {post.creatorId?.userName}</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col"><span className="tag"><i className="bi bi-tag-fill"></i>Tag</span></div>
                    </div>
                  </div>
                </div>

              </div>

            ))}

          </div>

        </div>
      </section>
    </>
  );
};

export default Post;
