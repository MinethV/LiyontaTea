import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-dark text-white py-3">
      <div className="container">
          <h1>Want To Taste Our Tea?</h1>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </header>

      {/* About Section */}
      <section className="py-5">
        <div className="container">
          <h2>About Us</h2>
          <p>Some information about your tea business goes here.</p>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2>Our Tea Products</h2>
          <div className="row">
            {/* Add your product cards here */}
            <div className="col-md-3">
              <div className="card">
                <img src="product1.jpg" className="card-img-top" alt="Product 1" />
                <div className="card-body">
                  <h5 className="card-title">Product 1</h5>
                  <p className="card-text">Some product description goes here.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>A note from our founder:</h2>
              <p>Some note from the founder goes here.</p>
            </div>
            <div className="col-md-6">
              <img src="founder.jpg" className="img-fluid" alt="Founder" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-3">
        <div className="container">
          <p>&copy; Your Tea Business</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;