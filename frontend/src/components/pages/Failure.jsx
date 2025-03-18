import React from "react";
import { useNavigate } from "react-router-dom";

const Failure = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center" style={{ padding: "50px" }}>
      <h1>❌ Payment Failed ❌</h1>
      <p>Something went wrong with your payment. Please try again.</p>
      <button className="btn btn-danger" onClick={() => navigate("/")}>
        Try Again
      </button>
    </div>
  );
};

export default Failure;
