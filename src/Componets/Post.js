import { Link } from "react-router-dom";
import * as React from "react";
import { useState } from "react";

const Post = ({ posts }) => {

  return (
    <>
      <div className="album py-5">
        <div className="container">

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {posts?.map((post, index) => (
            <div className="col">
              <div className="card shadow-sm">
                <Link to={`/${post._id}`}>
                <div className="featured">Featured</div>
                <div className="wrapperImg">
                  <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574" />
                </div>
                </Link>

                <div className="card-body">
                    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-3">
                      <div className="col-lg-6 col-md-8">
                        <div className="card-text foodTitle">{post.title}</div>
                        <div className="foodTime">{post.timeSlot}</div>
                        <div className="price">{post.price}</div>
                      </div>
                      <div className="col-lg-6 col-md-8 text-end">
                        <button type="button" className="btn btn-sm btn-outline-secondary reserve"><i className="bi bi-bag"></i> Reserve</button>
                        <div className="foodAddress">{post.address}</div>
                        <div className="foodCreator">Made by: xy</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col"><span className="tag sushi">{post.specials}</span></div>
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
