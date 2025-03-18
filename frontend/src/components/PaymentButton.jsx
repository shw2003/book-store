import React from "react";
import axios from "axios";

const PaymentButton = ({ amount }) => {
  const handlePayment = async () => {
    try {
      // Step 1: Create Order from Backend
      const { data } = await axios.post(
        "http://localhost:1000/api/payment/create-order",
        {
          amount,
        }
      );

      if (!data.success) {
        alert("Order creation failed!");
        return;
      }

      const { id: order_id, amount: order_amount, currency } = data.order;

      // Step 2: Open Razorpay Payment Gateway
      const options = {
        key: "key__id", // Replace with Razorpay Key ID
        amount: order_amount,
        currency,
        name: "Book Store",
        description: "Book Purchase Payment",
        order_id,
        handler: async (response) => {
          // Step 3: Verify Payment on Backend
          const verifyRes = await axios.post(
            "http://localhost:1000/api/payment/verify-payment",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }
          );

          if (verifyRes.data.success) {
            alert("Payment Successful!");
          } else {
            alert("Payment Verification Failed!");
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

  return <button onClick={handlePayment}>Pay ₹{amount}</button>;
};

export default PaymentButton;
