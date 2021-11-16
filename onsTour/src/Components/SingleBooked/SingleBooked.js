import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import useFirebase from "../../Hook/useFirebase";
import "./SingleBooked.css";

const SingleBooked = (props) => {
  const { user, logOut } = useFirebase();
  const handleDelete = (id) => {
    props.handleDeleteUserService(id);
  };
  if (props.booked.email === user.email) {
    return (
      <div>
        <div className="my-5 ">
          <div className="card h-100 border-0 shadow service-cart ">
            <img
              src={props.booked.package.image}
              className="card-img-top img-height"
              alt="..."
            />
            <div className="card-body">
              <h2 className="card-title text-uppercase ts-3">
                {props.booked.package.title}{" "}
              </h2>
              <p>
                <small className="text-secondary pe-2 fw-bold">
                  ( {props.booked.package.reviews} reviews )
                </small>{" "}
                <Rating
                  className="me-3"
                  initialRating={props.booked.package.rating}
                  readonly
                  emptySymbol={
                    <i className="far fa-star text-warning ts-5"></i>
                  }
                  placeholderSymbol={
                    <i className="fas fa-star text-warning ts-5"></i>
                  }
                  fullSymbol={<i className="fas fa-star text-warning ts-5"></i>}
                />
              </p>
              <h4 className="card-title text-uppercase my-3">
                <span className="fw-bold"> Order KEY:</span>{" "}
                <span className="bg-dark text-light px-2">
                  {props.booked.package._id}
                </span>
              </h4>
              <h4 className="card-title text-uppercase my-3 text-danger">
                <span className="fw-bold text-dark">COST: $</span>
                {props.booked.package.cost}
              </h4>
              <p className="card-text ts-5">
                <span className="fw-bold"> Description: </span>{" "}
                {props.booked.package.description.slice(0, 350)}{" "}
                <Link to={`/details/${props.booked.package.id}`}>
                  <small>...show more</small>
                </Link>
              </p>
            </div>
            <div className="card-footer bg-body border-0">
              <div className="d-flex justify-content-around my-3">
                <button className="btn btn-primary"> Liked </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(props.booked._id)}
                >
                  Delete <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default SingleBooked;
