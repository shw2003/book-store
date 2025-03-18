import React from "react";
import "../../App.css";
import "./Home.css";
import { Link } from "react-router-dom";
import PaymentButton from "../PaymentButton.jsx";

const Home = () => {
  return (
    <div className="home-page d-flex justify-content-center align-items-center text-white">
      <div className="overlay"></div>
      <div className="container text-center">
        <h2 className="display-1 fw-bold text-gradient">Book Store</h2>
        <h3 className="display-4 fw-semibold">FOR YOU</h3>
        <p className="lead text-light">
          Discover your next favorite book today.
        </p>
        <Link to="/books">
          <button className="btn btn-lg custom-btn">View Books</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
