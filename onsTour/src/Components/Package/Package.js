import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./Package.css";

const Package = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://polar-inlet-15504.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch();
  }, []);
  const {
    title,
    country,
    city,
    place,
    description,
    time,
    people,
    reviews,
    rating,
    cost,
    image,
    id,
    _id,
  } = props.package;
  const handleDelete = (id) => {
    props.handleDeleteUserService(id);
  };
  return (
    <div className="col">
      <div className="card shadow" style={{ minHeight: "800px" }}>
        <div className="card bg-dark text-white">
          <img src={image} className="card-img package-img" alt="..." />
          <div className="card-img-overlay p-0">
            <div>
              <div className="d-flex justify-content-between">
                <p></p>
                <h5 className="bg-danger p-1 my-2">
                  $<span>{cost}</span> / per person
                </h5>
              </div>
              <div className="footer">
                <p className="bg-success my-0 mx-3 p-2 d-flex justify-content-evenly">
                  <small>
                    <i className="fa-solid fa-clock-rotate-left"></i> {time}
                  </small>
                  <small className="border-end border-start px-2">
                    <i className="fa-solid fa-user-large"></i> People-{people}
                  </small>
                  <small>
                    <i className="fa-solid fa-location-dot"></i> {country}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-secondary m-0 p-o">{place}</p>
          <p className="card-text text-secondary m-0 p-o">{city}</p>
          <small className="text-secondary pe-2 fw-bold">
            ({reviews} reviews)
          </small>{" "}
          <Rating
            className="me-3"
            initialRating={rating}
            readonly
            emptySymbol={<i className="far fa-star text-warning ts-5"></i>}
            placeholderSymbol={
              <i className="fas fa-star text-warning ts-5"></i>
            }
            fullSymbol={<i className="fas fa-star text-warning ts-5"></i>}
          />
          <p className="card-text fw-bold text-secondary pt-2">
            {description.slice(0, 300)}{" "}
            <Link to={`/details/${_id}`}>
              <small>...show more</small>
            </Link>
          </p>
        </div>
        <div className="d-flex">
          <Link to={`/details/${_id}`} className="w-50 text-center my-2 link">
            <button className="btn btn-outline-success">
              Book Now <i className="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            type="button"
            className="align-self-center btn btn-outline-danger mx-auto"
          >
            Delete <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Package;
