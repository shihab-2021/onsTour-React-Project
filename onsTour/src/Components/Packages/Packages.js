import React, { useEffect, useState } from "react";
import Package from "../Package/Package";
import "./Packages.css";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("https://polar-inlet-15504.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  const handleDeleteUserService = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    console.log(id);
    if (proceed) {
      //   const url = `https://polar-inlet-15504.herokuapp.com/users/${id}`;
      fetch(`https://polar-inlet-15504.herokuapp.com/packages/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log(id);
            alert("deleted successfully");
            const remainingUsers = packages.filter(
              (userService) => userService._id !== id
            );
            setPackages(remainingUsers);
          }
        });
    }
  };
  return (
    <div className="container my-4">
      <div className="text-center">
        <h1 className="heading text-primary">POPULAR PACKAGES</h1>
        <h5 className="w-50 mx-auto">
          Find vacation packages on <span className="text-danger">o</span>
          <span className="text-warning">n</span>
          <span className="text-info">s</span>
          <span className="text-success">Tour</span> by comparing prices and
          reading world class hotel reviews.
        </h5>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-5">
        {packages.map((plrPackage) => (
          <Package
            handleDeleteUserService={handleDeleteUserService}
            package={plrPackage}
            key={plrPackage.id}
          ></Package>
        ))}
      </div>
    </div>
  );
};

export default Packages;
