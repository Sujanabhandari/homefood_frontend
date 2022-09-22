import { useParams, Link, Outlet } from "react-router-dom";

const SinglePost = ({ posts }) => {

  const { id } = useParams();
  const clickedPost = posts?.filter((post) => post._id == id);

  return (
      <>
        <div className="container">
          <div className="row ">
            <h2>Food</h2>
            {clickedPost?.map((post, index) => (
            <h4>{post.title}</h4>
            ))}
          </div>
        </div>
      </>
    );

};

export default SinglePost;
