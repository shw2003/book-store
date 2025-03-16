import React, { useEffect, useState } from "react";
import axios from "axios";
import BooksSection from "./BooksSection";
import { Spinner } from "react-bootstrap";

const Books = () => {
  const [data, setData] = useState(null);

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

  return (
    <div
      className="bg-dark text-white"
      style={{ minHeight: "90vh", padding: "30px 0" }}
    >
      {/* Page Heading */}
      <div className="text-center mb-4">
        <h2 className="fw-bold" style={{ color: "#f8f9fa" }}>
          📚 Book Collection
        </h2>
        <p style={{ color: "silver" }}>
          Explore the available books in our store
        </p>
      </div>

      {/* Books Display */}
      <div className="container">
        {data ? (
          <BooksSection dataBook={data} setDataBook={setData} />
        ) : (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "60vh" }}
          >
            {/* Fancy Loading Spinner */}
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
