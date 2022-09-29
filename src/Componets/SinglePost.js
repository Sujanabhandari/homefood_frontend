/* eslint-disable jsx-a11y/alt-text */
import { useParams, Link, Outlet } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import { useHomeContext } from './MainContext';


const SinglePost = ({ posts }) => {
  const {formState, setFormState, user}  = useHomeContext();

  const { id } = useParams();


  const clickedPost = posts?.filter((post) => post._id == id);

  return (
    <>
      {clickedPost?.map((post, index) => (
          <section className="album singlePost" key={index}>
            <div className="container">
              <h1>{post.title}</h1>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="card shadow-sm">
                    <div className="foodQuantity">{post.quantity} meals left</div>
                    <div className="featured">{post.categories}</div>
                    <div className="wrapperImg">
                      <img src={post.image} />
                    </div>

                    <div className="card-body">
                        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-3">
                          <div className="col-lg-6 col-md-8">
                            <div className="card-text foodTitle">{post.title}</div>
                            <div className="foodTime"><i className="bi bi-clock"></i> Collect: {post.timeSlot}</div>
                            <div className="price">{post.price} </div>
                          </div>
                          <div className="col-lg-6 col-md-8 text-end">
                            <div>&nbsp;</div>
                            <div className="foodAddress"><i className="bi bi-geo-alt-fill"></i> {post.address}</div>
                            <div className="foodCreator"><i class="bi bi-person"></i> {post.creatorId?.userName}</div>
                          </div>
                        </div>
                        { post.specials ?
                        <div className="row mt-2">
                          <div className="col"><span className="tag"><i className="bi bi-tag-fill"></i> {post.specials}</span></div>
                        </div>
                        :
                        <div></div>
                        }
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-8 mt-3 mt-md-0">

                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Description</Accordion.Header>
                      <Accordion.Body>
                        {post.description}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>About Food Creator</Accordion.Header>
                      <Accordion.Body>
                      <div className="row g-3">
                        <div className="col-12 col-md-4">
                          <div className="wrapperImgCreator">
                            <img src={post.creatorId?.profilePic} />
                          </div>
                        </div>
                        <div className="col-12 col-md-8">
                          <div>{post.creatorId?.userName}</div>
                          <div>Joined at:</div>
                          <div>Meals cooked at: </div>
                          <div>Average Rating: 4,6 frated by x users</div>
                        </div>
                      </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                </div>
              </div>

              <div className="row">
                <div className="col text-end">
                {post.quantity ? <Link type="button" to={`/offers/${post._id}/order`} className="btn btn-secondary text-white mt-3">
                  <i className="bi bi-bag"></i> Reserve now</Link> :
                  <div>
                  <button type="button" className="btn btn-secondary text-white mt-3" disabled>
                 Sold Out</button>
                  </div>}
                </div>
              </div>

            </div>
          </section>
      ))}
    </>
  );

};

export default SinglePost;
