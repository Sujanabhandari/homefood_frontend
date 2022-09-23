import { Link } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import SweetPagination from "sweetpagination";

const Post = ({ posts }) => {

  return (
    <>
      <div className="album">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

          {posts?.map((post, index) => (

            <div className="col">

              <div className="card shadow-sm">
                <Link to={`/${post._id}`}>
                <div className="featured">{post.categories}</div>
                <div className="wrapperImg">
                  <img src={post.image} />
                </div>
                </Link>

                <div className="card-body">
                    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-3">
                      <div className="col-lg-6 col-md-8">
                        <div className="card-text foodTitle">{post.title}</div>
                        <div className="foodTime"><i class="bi bi-clock"></i> Collect: {post.timeSlot}</div>
                        <div className="price">{post.price} </div>
                      </div>
                      <div className="col-lg-6 col-md-8 text-end">
                        <button type="button" className="btn btn-sm btn-outline-secondary reserve"><i className="bi bi-bag"></i> {post.quantity} meals left</button>
                        <div className="foodAddress"><i class="bi bi-geo-alt-fill"></i> {post.address}</div>
                        <div className="foodCreator">Made by: xy</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col"><span className="tag"><i class="bi bi-tag-fill"></i>Tag</span></div>
                    </div>
                </div>
              </div>

            </div>

          ))}

          </div>

        </div>
      </div>
    </>
  );
};

export default Post;
