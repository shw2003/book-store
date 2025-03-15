import React from "react";
import "../../App.css";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  // const image = require("../images/Book-store-img");
  return (
    <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center  align-item-center align-items-lg-center">
      <div className="row container">
        <div
          className="col-lg d-flex justify-content-center  align-item-center align-items-lg-start flex-column"
          style={{ height: "91.5vh" }}
        >
          <h2 style={{ fontSize: "80px" }}>Book Store</h2>
          <h3 style={{ fontSize: "50px" }}>FOR YOU</h3>
          <p className="mb-0" style={{ color: "silver" }}>
            Checkout the books from here.
          </p>
          <Link to="/books">
            <button className="viewbook my-3">View Books</button>
          </Link>
        </div>
        <div
          className="col-lg-6 d-flex justify-content align-items-end flex-column"
          style={{ height: "91.5vh" }}
        >
          <img
            src="https://images.unsplash.com/photo-1494809610410-160faaed4de0?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Book-store-img"
            className="img-fluid homeimg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
