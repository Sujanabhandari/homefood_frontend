const SpecialOffer = () => {

  return (

  <section className="text-center container mb-5">
    <div className="row">

      <div className="col-lg-6 col-md-8 mx-auto specialOffer">
        <div className="row">
          <div className="col-lg-6">
            <img src="https://w1.pngwing.com/pngs/701/242/png-transparent-cake-american-muffins-bakery-bagel-baking-cornbread-english-muffin-egg.png" />
          </div>
          <div className="col-lg-6">
            <h3 className="fw-light category mt-3">All deserts</h3>
            <p className="discount mt-4">20% OFF</p>
            <p className="desc mt-3">Deserty</p>
          </div>
        </div>
      </div>

      <div className="col-lg-6 col-md-8 mx-auto specialOffer">
        <div className="row">
          <div className="col-lg-6">
            <img src="https://cdn.imgbin.com/10/4/8/imgbin-big-king-whopper-hamburger-cheeseburger-veggie-burger-burger-restaurant-wn2WEDtyZcqmF1nNCbSbEmZf4.jpg" />
          </div>
          <div className="col-lg-6">
            <h3 className="fw-light category mt-3">Big burgers</h3>
            <p className="discount mt-4">50% OFF</p>
            <p className="desc mt-3">Foodies</p>
          </div>
        </div>
      </div>

    </div>
  </section>

  );
};

export default SpecialOffer;
