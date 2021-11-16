import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useFirebase from "../../Hook/useFirebase";

const Signin = () => {
  const { signInUsingGoogle } = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Data, setData] = useState([]);
  const [error, setError] = useState("");
  const location = useLocation();
  const history = useHistory();
  const auth = getAuth();
  const redirect_uri = location.state?.from || "/home";
  useEffect(() => {
    fetch("https://polar-inlet-15504.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const handleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
        const email = result.user.email;
        const name = result.user.displayName;
        const photo = result.user.photoURL;
        const newUser = { name, email, photo };
        setError("");

        let flag = 0;
        for (const singleData of Data) {
          if (singleData.email === email) {
            flag = 1;
            return;
          }
        }
        if (flag === 0) {
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
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
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
    processLogin(email, password);
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        history.push(redirect_uri);
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleRegistration}
        className="my-5 p-4 rounded shadow mx-auto"
        style={{ maxWidth: "25rem" }}
      >
        <div className="mb-3">
          <h2 className="text-center pb-2">Please Signin</h2>
          <label htmlFor="exampleInputEmail1" className="form-label">
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
        <div className="row mb-3 text-danger">{error}</div>
        <div>
          <h6 className="pb-3">
            Don't have an account? <Link to="/signup">Register</Link>
          </h6>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <div className="pt-5 text-center">
          <button onClick={handleLogin} className="btn btn-info">
            <i className="fa-brands fa-google"></i> Sign In with{" "}
            <span className="text-danger">google</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
