import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
    <>
    <main>

      <section className="py-5 text-center container">
        <div className="row py-lg-5">

          <div className="col-lg-6 col-md-8 mx-auto specialOffer">
            <img className="float-start" src="https://w1.pngwing.com/pngs/701/242/png-transparent-cake-american-muffins-bakery-bagel-baking-cornbread-english-muffin-egg.png" />
            <h3 className="fw-light category mt-3">All deserts</h3>
            <p className="discount mt-4">20% OFF</p>
            <p className="desc mt-5">Deserty</p>
          </div>

          <div className="col-lg-6 col-md-8 mx-auto specialOffer">
            <img className="float-start" src="https://cdn.imgbin.com/10/4/8/imgbin-big-king-whopper-hamburger-cheeseburger-veggie-burger-burger-restaurant-wn2WEDtyZcqmF1nNCbSbEmZf4.jpg" />
            <h3 className="fw-light category mt-3">Big burgers</h3>
            <p className="discount mt-4">50% OFF</p>
            <p className="desc mt-5">Foodies</p>
          </div>

        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <div className="featured">Featured</div>
                <div class="wrapperImg">
                  <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574" />
                </div>

                <div className="card-body">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                      <div className="col-lg-6 col-md-8">
                        <div className="card-text foodTitle">Text</div>
                        <div class="foodTime">test date</div><div class="price">5€</div>
                      </div>
                      <div className="col-lg-6 col-md-8 text-end">
                        <button type="button" className="btn btn-sm btn-outline-secondary"><i class="bi bi-bag"></i></button>
                        <p class="foodAddress">Adresse</p>
                      </div>
                    <div className="tags">test tag 1, test tag 2</div>
                    </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <div class="wrapperImg">
                  <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574" />
                </div>

                <div className="card-body">
                  <p className="card-text">Text</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Text</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Text</button>
                    </div>
                    <small className="text-muted">Text</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <div class="wrapperImg">
                  <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574" />
                </div>

                <div className="card-body">
                  <p className="card-text">Text</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Text</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Text</button>
                    </div>
                    <small className="text-muted">Text</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <div class="wrapperImg">
                  <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574" />
                </div>

                <div className="card-body">
                  <p className="card-text">Text</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Text</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Text</button>
                    </div>
                    <small className="text-muted">Text</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <div class="wrapperImg">
                  <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574" />
                </div>

                <div className="card-body">
                  <p className="card-text">Text</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Text</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Text</button>
                    </div>
                    <small className="text-muted">Text</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <div class="wrapperImg">
                  <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574" />
                </div>

                <div className="card-body">
                  <p className="card-text">Text</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Text</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Text</button>
                    </div>
                    <small className="text-muted">Text</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <div class="wrapperImg">
                  <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574" />
                </div>

                <div className="card-body">
                  <p className="card-text">Text</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Text</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Text</button>
                    </div>
                    <small className="text-muted">Text</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <div class="wrapperImg">
                  <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574" />
                </div>

                <div className="card-body">
                  <p className="card-text">Text</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Text</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Text</button>
                    </div>
                    <small className="text-muted">Text</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <div class="wrapperImg">
                  <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574" />
                </div>

                <div className="card-body">
                  <p className="card-text">Text</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Text</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Text</button>
                    </div>
                    <small className="text-muted">Text</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
    </>
    )
  }
}

export default Home;
