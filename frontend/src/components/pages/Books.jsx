import React, { useEffect, useState } from "react";
import axios from "axios";
import BooksSection from "./BooksSection";
import PaymentButton from "../PaymentButton.jsx"; 
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Books = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:1000/api/v1/getAllBooks");
        setData(res.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  const handleBuyNow = async (amount) => {
    try {
      const { data } = await axios.post(
        "http://localhost:1000/api/payment/create-order",
        { amount }
      );

      if (!data.success) {
        alert("Order creation failed!");
        return;
      }

      const { id: order_id, amount: order_amount, currency } = data.order;

      const options = {
        key: "Key ID",
        amount: order_amount,
        currency,
        name: "Book Store",
        description: "Book Purchase Payment",
        order_id,
        handler: async (response) => {
          const verifyRes = await axios.post(
            "http://localhost:1000/api/payment/verify-payment",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }
          );

          if (verifyRes.data.success) {
            navigate("/thank-you"); 
          } else {
            navigate("/payment-failed"); 
          }
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div
      className="bg-dark text-white"
      style={{ minHeight: "90vh", padding: "30px 0" }}
    >
      <div className="text-center mb-4">
        <h2 className="fw-bold" style={{ color: "#f8f9fa" }}>
          📚 Book Collection
        </h2>
        <p style={{ color: "silver" }}>
          Explore the available books in our store
        </p>
      </div>

      <div className="container">
        {data ? (
          <BooksSection
            dataBook={data}
            setDataBook={setData}
            handleBuyNow={handleBuyNow}
          />
        ) : (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "60vh" }}
          >
            <div className="text-center">
              <Spinner animation="border" variant="light" />
              <p className="mt-3">Fetching Books...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
