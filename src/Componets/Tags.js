import { Link } from "react-router-dom";

const Tags = () => {
  return (
    <section className="container mb-5 px-0 tags text-center">
      <h3><i class="bi bi-tags-fill"></i></h3>
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
        <div className="tag">Vegetarian</div>
        <div className="tag mx-2 my-2 my-md-0">Vegan</div>
        <div className="tag mx-2 my-md-0">Milk Intolerance</div>
        <div className="tag">Offer Packaging</div>
      </div>
      
    </section>

  );
};

export default Tags