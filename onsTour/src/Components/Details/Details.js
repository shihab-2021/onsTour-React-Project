import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useFirebase from "../../Hook/useFirebase";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const { user, logOut } = useFirebase();
  console.log(user);
  const [data, setData] = useState([]);

  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.package = itemDetail[0];
    console.log(data);
    axios
      .post("https://polar-inlet-15504.herokuapp.com/booking", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert(
            "Booking Added. You can see your booking in My Booking or Dashboard page. Thank you"
          );
          reset();
        }
      });
  };

  useEffect(() => {
    fetch("https://polar-inlet-15504.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch();
  }, []);

  const itemDetail = data.filter((td) => td._id === id);
  // console.log(itemDetail);

  return (
    <div>
      <div
        id="show"
        style={{
          minHeight: "450px",
          backgroundImage: `url(${itemDetail[0]?.image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <section className="container">
          <div className="detail-footer pb-3">
            <small className="text-secondary pe-2 fw-bold">
              ( {itemDetail[0]?.reviews} reviews )
            </small>{" "}
            <Rating
              className="me-3"
              initialRating={itemDetail[0]?.rating}
              readonly
              emptySymbol={<i className="far fa-star text-warning ts-5"></i>}
              placeholderSymbol={
                <i className="fas fa-star text-warning ts-5"></i>
              }
              fullSymbol={<i className="fas fa-star text-warning ts-5"></i>}
            />
            <h1>{itemDetail[0]?.title}</h1>
            <h4>
              {itemDetail[0]?.city}, {itemDetail[0]?.country}
            </h4>
            <h4 className="p-1 my-2 border-danger border-bottom d-inline-block">
              <span className="text-danger">$</span>
              {itemDetail[0]?.cost} / per person
            </h4>
          </div>
        </section>
      </div>
      <section className="container py-5 my-5">
        <Row className="align-items-center">
          <Col sm={12} md={7}>
            <div className="slogan">
              <h1 className="text-success">{itemDetail[0]?.title}</h1>
              <h5 className="text-secondary">{itemDetail[0]?.description}</h5>
              <br />
              <br />
            </div>
            <div className="pt-5">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="my-2 p-4 rounded shadow"
              >
                <div className="mb-3">
                  <h2 className="text-center">Book Now</h2>
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label mt-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                    {...register("name", { required: true, maxLength: 40 })}
                    placeholder="name"
                  />
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label mt-2"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                    {...register("phone", { required: true, maxLength: 40 })}
                    placeholder="phone"
                  />
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label mt-2"
                  >
                    Email address
                  </label>
                  <input
                    value={user.email || ""}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    {...register("email", { required: true, maxLength: 40 })}
                    placeholder="email"
                  />

                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label mt-2"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                    {...register("city", { required: true, maxLength: 40 })}
                    placeholder="city"
                  />
                </div>
                <div className="row mb-3 text-danger"></div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </Col>
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
            <div className="p-4 bgBlue mt-5 d-flex">
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
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Details;
