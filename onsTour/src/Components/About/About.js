import React from "react";
import { Col, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="showcase">
        <section className="container py-5">
          <Row className="align-items-center">
            <Col sm={12} md={7}>
              <div>
                <h1 className="text-success team">
                  Top Tourist Care Quality in the World you can receive from{" "}
                  <span className="logo">
                    <span className="text-danger">o</span>
                    <span className="text-warning">n</span>
                    <span className="text-info">s</span>
                    <span className="text-success">Tour</span>
                  </span>
                </h1>
                <br />
                <h4 className="text-info">
                  “Our goal is to provide the best experience with every
                  encounter, every time."
                </h4>
                <br />
                <p className="text-secondary">
                  For more than 60 years,{" "}
                  <span className="logo">
                    <span className="text-danger">o</span>
                    <span className="text-warning">n</span>
                    <span className="text-info">s</span>
                    <span className="text-success">Tour</span>
                  </span>{" "}
                  has provided the best in tourist care to the people of Los
                  Angeles and throughout the world.
                </p>
                <br />
                <button className="btn btn-outline-info mb-3">
                  Call 543-837-2436
                </button>
              </div>
            </Col>
            <Col md={5}>
              <div className="card mx-auto shadow">
                <div className="card-body">
                  <h2 className="card-title">Newsroom</h2>
                  <h5 className="text-danger">Stay in touch</h5>
                  <br />
                  <p className="card-text mb-4">
                    Subscribe to{" "}
                    <span className="logo">
                      <span className="text-danger">o</span>
                      <span className="text-warning">n</span>
                      <span className="text-info">s</span>
                      <span className="text-success">Tour</span>
                    </span>{" "}
                    newsletters and publications to stay in the know on the
                    latest developments.
                  </p>
                  <button className="btn btn-danger mt-3">Subscribe</button>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </div>

      <section className="container py-5">
        <Row className="align-items-center">
          <Col md={5}>
            <div className="card shadow">
              <div className="card-body">
                <h1 className="card-title">Contact Us</h1>
                <hr className="w-50 text-danger p-1 rounded-pill" />
                <br />
                <h5 className="card-text">Phone : +(143) 1846-367</h5>
                <br />
                <h5 className="card-text">Office : +(423) 4805-567</h5>
                <br />
                <h5 className="card-text">E-mail : onsTour@yahoo.com</h5>
                <br />
                <h5>
                  Social :
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
                </h5>
                <br />
              </div>
            </div>
          </Col>
          <Col sm={12} md={7}>
            <div>
              <p>
                <span className="logo">
                  <span className="text-danger">o</span>
                  <span className="text-warning">n</span>
                  <span className="text-info">s</span>
                  <span className="text-success">Tour</span>
                </span>{" "}
                Tour is among the most comprehensive and advanced Tour care
                systems in the world. Together,{" "}
                <span className="logo">
                  <span className="text-danger">o</span>
                  <span className="text-warning">n</span>
                  <span className="text-info">s</span>
                  <span className="text-success">Tour</span>
                </span>{" "}
                Tour and the David Geffen School of Medicine at{" "}
                <span className="logo">
                  <span className="text-danger">o</span>
                  <span className="text-warning">n</span>
                  <span className="text-info">s</span>
                  <span className="text-success">Tour</span>
                </span>{" "}
                strive every day to be a model that redefines the standard of
                excellence in Tour care. It is our integrated mission to provide
                state-of-the-art patient care, to train top medical
                professionals and to support pioneering research and discovery.
              </p>
              <br />
              <p>
                Our tour grids are world leaders in the diagnosis and treatment
                of complex illnesses, and our hospitals are consistently ranked
                among the best in the nation by U.S. News & World Report.
                <span className="logo">
                  <span className="text-danger">o</span>
                  <span className="text-warning">n</span>
                  <span className="text-info">s</span>
                  <span className="text-success">Tour</span>
                </span>{" "}
                Tour is at the cutting edge of biomedical research, and our
                doctors and scientists are pioneering work across an astounding
                range of disciplines, from organ transplantation and cardiac
                surgery to neurosurgery and cancer treatment, and bringing the
                latest discoveries to virtually every field of medicine.
              </p>
            </div>
          </Col>
        </Row>
      </section>

      <section className="container text-center pb-5">
        <h1 className="text-danger">Mission and Vision</h1>
        <br />
        <h5>Our mission is to deliver best tour care.</h5>
        <br />
        <h6>
          Our vision is to improving Tour facilities, alleviating suffering and
          delivering acts of kindness.
        </h6>
        <div className="p-4 bgBlue mt-5 d-flex w-50 mx-auto justify-content-center">
          <div className="imgIcon me-4">
            <i className="fa fa-phone" aria-hidden="true"></i>
          </div>
          <div className="text-light">
            <h3>
              Hotline <span className="text-danger">(24 hour)</span>
            </h3>
            <p>+003856543746</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
