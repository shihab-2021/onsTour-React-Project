import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://polar-inlet-15504.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch();
  }, []);
  const handleDeleteUserService = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    console.log(id);
    if (proceed) {
      //   const url = `https://polar-inlet-15504.herokuapp.com/users/${id}`;
      fetch(`https://polar-inlet-15504.herokuapp.com/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log(id);
            alert("deleted successfully");
            const remainingUsers = users.filter(
              (userService) => userService._id !== id
            );
            setUsers(remainingUsers);
          }
        });
    }
  };
  return (
    <div className="container shadow my-2 py-2">
      <h3 className="text-center">All Users</h3>
      <div className="py-4">
        {users.map((user) => (
          <div key={user._id} className="shadow border-0 my-3 p-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <img
                  src={user.photo}
                  alt=""
                  className="rounded-circle border border-1"
                />
                <h4 className="align-self-center px-2">{user.name}</h4>
              </div>
              <div className="d-flex">
                <button
                  onClick={() => handleDeleteUserService(user._id)}
                  type="button"
                  className="align-self-center btn btn-outline-danger mx-3"
                >
                  <small>Delete</small>
                </button>

                <Link
                  className="align-self-center mx-3"
                  to={`/users/${user._id}`}
                >
                  <button
                    type="button"
                    className="align-self-center btn btn-outline-danger"
                  >
                    <small>Update</small>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
