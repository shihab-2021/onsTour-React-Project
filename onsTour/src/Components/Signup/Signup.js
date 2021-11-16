import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
} from "@firebase/auth";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useFirebase from "../../Hook/useFirebase";

const Signup = () => {
  const { signInUsingGoogle } = useFirebase();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const auth = getAuth();

  const handleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePhotoChange = (e) => {
    setPhoto(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password Must contain 2 upper case");
      return;
    }
    registerNewUser(email, password, photo);
  };

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        history.push(redirect_uri);
        const user = result.user;
        console.log(user);
        const newUser = { name, email };
        setError("");
        setUserName();
        fetch("https://polar-inlet-15504.herokuapp.com/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              alert("Successfully added the user.");
              // e.target.reset();
            }
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };
  return (
    <div>
      <form
        onSubmit={handleRegistration}
        className="my-5 p-4 rounded shadow mx-auto"
        style={{ maxWidth: "25rem" }}
      >
        <div className="mb-3">
          <h2 className="text-center">Please Signup</h2>
          <label htmlFor="exampleInputEmail1" className="form-label mt-2">
            Name
          </label>
          <input
            type="text"
            onBlur={handleNameChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <label htmlFor="exampleInputEmail1" className="form-label mt-2">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <label htmlFor="exampleInputEmail1" className="form-label mt-2">
            Email address
          </label>
          <input
            type="email"
            onBlur={handleEmailChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            onBlur={handlePasswordChange}
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <label htmlFor="exampleInputEmail1" className="form-label mt-2">
          Photo
        </label>
        <input
          type="text"
          onBlur={handlePhotoChange}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
        />
        <div className="row mb-3 text-danger">{error}</div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div className="pt-5">
          <h6 className="pb-3">
            Already have an account or want to sign in with Google?{" "}
            <Link to="/signin">Sign In</Link>
          </h6>
        </div>
      </form>
    </div>
  );
};

export default Signup;
