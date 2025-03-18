import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center" style={{ padding: "50px" }}>
      <h1>🎉 Thank You for Your Purchase! 🎉</h1>
      <p>Your payment was successful. Enjoy your book!</p>
      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
};

export default ThankYou;
