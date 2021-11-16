import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    fetch("https://polar-inlet-15504.herokuapp.com/booking")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch();
  }, []);
  let count = 0;
  const handleDeleteUserService = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    console.log(id);
    if (proceed) {
      const url = `https://polar-inlet-15504.herokuapp.com/booking/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log(id);
            alert("deleted successfully");
            const remainingUsers = Data.filter(
              (userService) => userService._id !== id
            );
            setData(remainingUsers);
          }
        });
    }
  };
  return (
    <div
      className="container border my-4 mx-auto overflow-auto d-flex justify-content-center"
      // style={{ height: "660px" }}
    >
      <div style={{ width: "1200px" }}>
        <div className="shadow border-0 my-3">
          <div className="d-flex">
            <div
              className="d-flex flex-column border-end"
              style={{ width: "300px" }}
            >
              <p className="align-self-center text-info px-1">User</p>
            </div>
            <div className="border-end" style={{ width: "300px" }}>
              <p className="text-center  px-1">Package Title</p>
            </div>
            <div
              style={{ width: "115px" }}
              className="d-flex flex-column text-center border-end justify-content-center align-items-center"
            >
              <p className="text-success">Time & Rating</p>
            </div>
            <div
              className="d-flex justify-content-center text-danger border-end"
              style={{ width: "100px" }}
            >
              <p className="align-self-center">Cost</p>
            </div>
            <div className="border-end text-center" style={{ width: "185px" }}>
              <p>Photo</p>
            </div>
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ width: "150px" }}
            >
              <p>Delete & Update</p>
            </div>
          </div>
        </div>
        {Data.map((userData) => (
          <div key={userData._id} className="border my-3 p-2">
            <div className="d-flex">
              <div
                className="d-flex flex-column border-end"
                style={{ width: "300px" }}
              >
                <p className="align-self-center text-info px-1">
                  {++count}. {userData.name}
                </p>
                <p className="align-self-center text-warning px-1">
                  {userData.email}
                </p>
              </div>
              <div className="d-flex border-end" style={{ width: "300px" }}>
                <p className="d-flex text-center align-self-center fw-bold px-1">
                  {userData.package.title}
                </p>
              </div>
              <div
                style={{ width: "115px" }}
                className="d-flex flex-column text-center border-end justify-content-center align-items-center"
              >
                <p className="text-success">{userData.package.time}</p>
                <Rating
                  className="me-3 align-self-center ps-2"
                  initialRating={userData.package.rating}
                  readonly
                  emptySymbol={
                    <i className="far fa-star text-warning ts-5"></i>
                  }
                  placeholderSymbol={
                    <i className="fas fa-star text-warning ts-5"></i>
                  }
                  fullSymbol={<i className="fas fa-star text-warning ts-5"></i>}
                />
              </div>
              <div
                className="d-flex justify-content-center text-danger border-end"
                style={{ width: "100px" }}
              >
                <p className="align-self-center">$ {userData.package.cost}</p>
              </div>
              <div className="border-end" style={{ width: "185px" }}>
                <img
                  className="img-fluid mx-2 "
                  style={{ width: "170px" }}
                  src={userData.package.image}
                  alt=""
                />
              </div>
              <div
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ width: "150px" }}
              >
                <button
                  type="button"
                  className="align-self-center btn btn-outline-danger my-1"
                  onClick={() => handleDeleteUserService(userData._id)}
                >
                  <small>Delete</small>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
