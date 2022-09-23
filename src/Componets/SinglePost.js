import { useParams, Link, Outlet } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import { useHomeContext } from './MainContext';
import { getUserByID } from "../utils/regitsterUser";

const SinglePost = ({ posts }) => {
  const {formState, setFormState, user}  = useHomeContext();
  console.log("From Single Post backend", getUserByID);
  console.log("From Single Post", user);
  const { id } = useParams();
  const clickedPost = posts?.filter((post) => post._id == id);

  return (
    <>
      {clickedPost?.map((post, index) => (
        <main>
          <div className="album singlePost">
            <div className="container">
              <h1>{post.title}</h1>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="card shadow-sm">
                    <div className="featured">{post.categories}</div>
                    <div className="wrapperImg">
                      <img src={post.image} />
                    </div>

                    <div className="card-body">
                        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-3">
                          <div className="col-lg-6 col-md-8">
                            <div className="card-text foodTitle">{post.title}</div>
                            <div className="foodTime"><i class="bi bi-clock"></i> Collect: {post.timeSlot}</div>
                            <div className="price">{post.price} </div>
                          </div>
                          <div className="col-lg-6 col-md-8 text-end">
                            <div className="foodQuantity">{post.quantity} meals left</div>
                            <div className="foodAddress"><i class="bi bi-geo-alt-fill"></i> {post.address}</div>
                            <div className="foodCreator">Made by: xy</div>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col"><span className="tag"><i class="bi bi-tag-fill"></i>Tag</span></div>
                        </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-8 mt-3 mt-md-0">

                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Description</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>About Food Creator</Accordion.Header>
                      <Accordion.Body>
                      <div className="row g-3">
                        <div className="col-12 col-md-4">
                          <div className="wrapperImgCreator">
                            <img src={post.image} />
                          </div>
                        </div>
                        <div className="col-12 col-md-8">
                          Name XYZ<br />
                          Joined at: dd.mm.yyyy<br />
                          Rating 5/5<br />
                        </div>
                      </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                </div>
              </div>

              <div className="row">
                <div className="col text-end">
                  <button type="button" class="btn buttonPurple mt-3"><i className="bi bi-bag"></i> Reserve now</button>
                </div>
              </div>

            </div>
          </div>

        </main>
      ))}
    </>
  );

};

export default SinglePost;
