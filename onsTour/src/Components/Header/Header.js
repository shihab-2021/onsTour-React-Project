import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hook/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useFirebase();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid container ">
          <Link className="navbar-brand tw-bold logo" to="/home">
            <span className="text-danger">o</span>
            <span className="text-warning">n</span>
            <span className="text-info">s</span>
            <span className="text-success">Tour</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/allPackages">
                  All Packages
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                {user?.email ? (
                  <Link className="nav-link active" to="/addToDB">
                    Add Package
                  </Link>
                ) : (
                  <p></p>
                )}
              </li>
              <li className="nav-item">
                {user?.email ? (
                  <Link className="nav-link active" to="/users">
                    All Users
                  </Link>
                ) : (
                  <p></p>
                )}
              </li>
              <li className="nav-item">
                {user?.email ? (
                  <Link className="nav-link active" to="/myBooking">
                    My Booking
                  </Link>
                ) : (
                  <p></p>
                )}
              </li>
              <li className="nav-item">
                {user?.email ? (
                  <Link
                    className="nav-link active text-warning tw-bold mx-2 border border-warning rounded-pill p-1"
                    to="/home"
                  >
                    {user.photoURL ? (
                      <span>
                        <img className="userImg" src={user.photoURL} alt="" />
                      </span>
                    ) : (
                      <span>
                        <img
                          className="userImg"
                          src="https://christopherscottedwards.com/wp-content/uploads/2018/07/Generic-Profile.jpg"
                          alt=""
                        />
                      </span>
                    )}{" "}
                    {user?.displayName}
                  </Link>
                ) : (
                  <p></p>
                )}
              </li>
              {user?.email ? (
                <button className="btn btn-outline-danger" onClick={logOut}>
                  Sign Out
                </button>
              ) : (
                <Link to="/signIn">
                  <button className="btn btn-outline-warning mx-2">
                    Sign In
                  </button>
                </Link>
              )}
              {!user?.email ? (
                <Link to="/signUp">
                  <button className="btn btn-outline-info">Sign Up</button>
                </Link>
              ) : (
                <p></p>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
