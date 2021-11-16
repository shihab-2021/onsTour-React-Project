import React from "react";
import "./PopularDestination.css";

const PopularDestination = () => {
  return (
    <div className="container my-5 py-5">
      <h5 className="d-flex text-danger">
        <hr
          className="p-1 rounded-pill text-danger me-1"
          style={{ width: "50px" }}
        />
        <span className="pt-2">POPULAR DESTINATION</span>
      </h5>
      <div className="row">
        <div className="heading col-lg-7 col-sm-12 text-secondary">
          TOP NOTCH DESTINATION
        </div>
        <div className="col-lg-5 col-sm-12 pt-3 fw-bold text-secondary">
          Group travelers are passionate about cultural exchange, authentic and
          responsible travel, global adventure, life-changing experiences,
          unforgettable personal stories, and savvy travel with friends or
          family.
        </div>
      </div>
      <div className="row py-5">
        <div className="col-lg-7 col-sm-12 pb-4">
          <div className="showPopDestination1">
            <div>
              <div className="card bg-dark text-white img-opacity">
                <img
                  src="https://demo.bosathemes.com/html/travele/assets/images/img1.jpg"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay p-0">
                  <div>
                    <div className="d-flex justify-content-between">
                      <h5 className="bg-success p-2 my-3 mx-3">THAILAND</h5>
                      <p></p>
                    </div>
                    <div className="footer m-3">
                      <h3>Disney Land</h3>
                      <h6>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card bg-dark text-white img-opacity">
                <img
                  src="https://demo.bosathemes.com/html/travele/assets/images/img2.jpg"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay p-0">
                  <div>
                    <div className="d-flex justify-content-between">
                      <h5 className="bg-success p-2 my-3 mx-3">NORWAY</h5>
                      <p></p>
                    </div>
                    <div className="footer m-3">
                      <h3>Besseggen Ridge</h3>
                      <h6>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-sm-12">
          <div className="showPopDestination2">
            <div>
              <div className="card bg-dark text-white img-opacity">
                <img
                  src="https://demo.bosathemes.com/html/travele/assets/images/img3.jpg"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay p-0">
                  <div>
                    <div className="d-flex justify-content-between">
                      <h5 className="bg-success p-2 my-3 mx-3">NEW ZEALAND</h5>
                      <p></p>
                    </div>
                    <div className="footer m-3">
                      <h3>Oxolotan City</h3>
                      <h6>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card bg-dark text-white img-opacity">
                <img
                  src="https://demo.bosathemes.com/html/travele/assets/images/img4.jpg"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay p-0">
                  <div>
                    <div className="d-flex justify-content-between">
                      <h5 className="bg-success p-2 my-3 mx-3">SINGAPORE</h5>
                      <p></p>
                    </div>
                    <div className="footer m-3">
                      <h3>Marina Bay Sand Bay</h3>
                      <h6>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;
