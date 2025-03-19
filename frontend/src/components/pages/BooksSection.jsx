import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BooksSection = ({ dataBook, setDataBook, handleBuyNow }) => {
  const [expanded, setExpanded] = useState({});
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this book?")) return;

    try {
      await axios.delete(`http://localhost:1000/api/v1/delete/${id}`);
      alert("Book deleted successfully");

      setDataBook((prevBook) => prevBook.filter((book) => book._id !== id));
    } catch (error) {
      console.log("Error in deleting Book:", error);
      alert("Failed to delete the book");
    }
  };

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <div className="container text-white">
      <h5>Available Books</h5>
      <div className="row">
        {dataBook.map((book) => (
          <div key={book._id} className="col-md-4">
            <div className="card bg-secondary p-3 my-2">
              <img
                src={book.image}
                alt="Book Preview"
                className="img-fluid"
                style={{
                  maxHeight: "200px",
                  objectFit: "cover",
                  display: book.image ? "block" : "none",
                }}
                loading="lazy"
              />
              <div className="card-body">
                <h6 className="card-title">{book.bookname}</h6>
                <p className="card-text">
                  {expanded[book._id]
                    ? book.description
                    : `${book.description.slice(0, 100)}`}
                  {"  "}
                  <span
                    className="text-primary"
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleReadMore(book._id)}
                  >
                    {expanded[book._id] ? "Read Less" : "Read More"}
                  </span>
                </p>
                <p className="fw-bold">Author: {book.author}</p>
                <p className="fw-bold">Price: &#8377;{book.price}</p>
                <div className="d-flex justify-content-around align-items-center">
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      navigate(`/update/${book._id}`, { state: { book } })
                    }
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(book._id)}
                  >
                    Delete
                  </button>

                  <button
                    variant="primary"
                    onClick={() => handleBuyNow(book.price)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksSection;
