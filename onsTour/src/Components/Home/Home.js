import React from "react";
import { Card, Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";
import Packages from "../Packages/Packages";
import PopularDestination from "../PopularDestination/PopularDestination";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* showcase section  */}
      <section>
        <Carousel fade>
          <Carousel.Item>
            <div
              className="w-100 d-flex flex-column justify-content-center align-items-center text-center"
              style={{
                minHeight: "550px",
                background:
                  "linear-gradient(#00000094, #00000094), url(https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg) no-repeat center center / cover",
              }}
            >
              <h1 className="logoHeading">
                <span className="text-danger">o</span>
                <span className="text-warning">n</span>
                <span className="text-info">s</span>
                <span className="text-success">Tour</span>
              </h1>
              <h2 className="text-light">
                With <span className="text-danger">US</span> on the way of
                <span className="text-danger"> JOURNEY</span>
              </h2>
              <h5 className="w-50 mx-auto text-light p-2">
                Discover cities from London to Tokyo in more than 80+ countries
                on a budget with our free tours and unforgettable local guides.
              </h5>
              <Link to="/about">
                <button className="btn btn-danger">About us</button>
              </Link>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="w-100 d-flex flex-column justify-content-center align-items-center text-center"
              style={{
                minHeight: "550px",
                background:
                  "linear-gradient(#00000094, #00000094), url(https://chopra.brightspotcdn.com/dims4/default/dfb2b37/2147483647/strip/true/crop/571x300+36+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Fchopra-brightspot.s3.amazonaws.com%2F61%2Fcc%2F9b0ff8c8aaba0ff21eafee50293c%2F6reasonswhytravelingisgoodforyou.jpg) no-repeat center center / cover",
              }}
            >
              <h1 className="logoHeading">
                <span className="text-danger">o</span>
                <span className="text-warning">n</span>
                <span className="text-info">s</span>
                <span className="text-success">Tour</span>
              </h1>
              <h2 className="text-light">
                With <span className="text-danger">US</span> on the way of
                <span className="text-danger"> JOURNEY</span>
              </h2>
              <h5 className="w-50 mx-auto text-light p-2">
                Discover cities from London to Tokyo in more than 80+ countries
                on a budget with our free tours and unforgettable local guides.
              </h5>
              <Link to="/about">
                <button className="btn btn-danger">About us</button>
              </Link>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="w-100 d-flex flex-column justify-content-center align-items-center text-center"
              style={{
                minHeight: "550px",
                background:
                  "linear-gradient(#00000094, #00000094), url(https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80) no-repeat center center / cover",
              }}
            >
              <h1 className="logoHeading">
                <span className="text-danger">o</span>
                <span className="text-warning">n</span>
                <span className="text-info">s</span>
                <span className="text-success">Tour</span>
              </h1>
              <h2 className="text-light">
                With <span className="text-danger">US</span> on the way of
                <span className="text-danger"> JOURNEY</span>
              </h2>
              <h5 className="w-50 mx-auto text-light p-2">
                Discover cities from London to Tokyo in more than 80+ countries
                on a budget with our free tours and unforgettable local guides.
              </h5>
              <Link to="/about">
                <button className="btn btn-danger">About us</button>
              </Link>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="w-100 d-flex flex-column justify-content-center align-items-center text-center"
              style={{
                minHeight: "550px",
                background:
                  "linear-gradient(#00000094, #00000094), url(https://www.treebo.com/blog/wp-content/uploads/2018/08/Tourist-Places-in-India.jpg) no-repeat center center / cover",
              }}
            >
              <h1 className="logoHeading">
                <span className="text-danger">o</span>
                <span className="text-warning">n</span>
                <span className="text-info">s</span>
                <span className="text-success">Tour</span>
              </h1>
              <h2 className="text-light">
                With <span className="text-danger">US</span> on the way of
                <span className="text-danger"> JOURNEY</span>
              </h2>
              <h5 className="w-50 mx-auto text-light p-2">
                Discover cities from London to Tokyo in more than 80+ countries
                on a budget with our free tours and unforgettable local guides.
              </h5>
              <Link to="/about">
                <button className="btn btn-danger">About us</button>
              </Link>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
      {/* section for showing Popular Destination */}
      <section>
        <PopularDestination></PopularDestination>
      </section>
      {/* section for showing Packages */}
      <section>
        <Packages></Packages>
      </section>
      {/* section for Specialist Doctors */}
      <section className="pb-5">
        <Container className="py-5">
          <h1 className="text-center text-info pt-5 heading">
            Our Special Guid
          </h1>
          <hr className="p-1 w-25 mx-auto mb-5 rounded-pill text-secondary" />
          <div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              <div className="col">
                <div className="card shadow">
                  <div className="text-center">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFf2u-S53J1UWxr-YwuEKtwBCwys1kZtWHtQ&usqp=CAU"
                      className="card-img-top img-fluid rounded-circle p-2 guidImg"
                      alt="..."
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title pb-3">Sahadat Hosain</h5>
                    <p>
                      <i
                        className="fa-brands fa-facebook-f mx-2 text-primary"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-brands fa-twitter mx-2 text-info"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-brands fa-instagram mx-2 text-danger"
                        aria-hidden="true"
                      ></i>
                      <i className="fa fa-envelope mx-2" aria-hidden="true"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow">
                  <div className="text-center">
                    <img
                      src="https://files.list.co.uk/images/t/tourguide-95.jpg"
                      className="card-img-top img-fluid rounded-circle p-2 guidImg"
                      alt="..."
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title pb-3">Mokhes Datta</h5>
                    <p>
                      <i
                        className="fa-brands fa-facebook-f mx-2 text-primary"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-brands fa-twitter mx-2 text-info"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-brands fa-instagram mx-2 text-danger"
                        aria-hidden="true"
                      ></i>
                      <i className="fa fa-envelope mx-2" aria-hidden="true"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow">
                  <div className="text-center">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKyQ_aG8IVaNG7cJM4rdptXdOCuqjchnORNbvI-w5Y6mcWl3C0ZmDQhbwM3gPE3-nrAWI&usqp=CAU"
                      className="card-img-top img-fluid rounded-circle p-2 guidImg"
                      alt="..."
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title pb-3">Sofia Karim</h5>
                    <p>
                      <i
                        className="fa-brands fa-facebook-f mx-2 text-primary"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-brands fa-twitter mx-2 text-info"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-brands fa-instagram mx-2 text-danger"
                        aria-hidden="true"
                      ></i>
                      <i className="fa fa-envelope mx-2" aria-hidden="true"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow">
                  <div className="text-center">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJRZdWjjI90bLm7Za4NaSRm_DiV19mxb0he3QXCh_P3R65bfwJSfX6e_OTD7MDt3f4Kg&usqp=CAU"
                      className="card-img-top img-fluid rounded-circle p-2 guidImg"
                      alt="..."
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title pb-3">Cyalo Sahia</h5>
                    <p>
                      <i
                        className="fa-brands fa-facebook-f mx-2 text-primary"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-brands fa-twitter mx-2 text-info"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa-brands fa-instagram mx-2 text-danger"
                        aria-hidden="true"
                      ></i>
                      <i className="fa fa-envelope mx-2" aria-hidden="true"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* section for showing Contact */}
      <section className="py-3 mt-3">
        <Contact></Contact>
      </section>
    </div>
  );
};

export default Home;
