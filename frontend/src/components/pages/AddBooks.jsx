import React, { useState } from "react";
import axios from "axios";
import { useCallback } from "react";
import { debounce } from "lodash";
import { useLocation, useNavigate } from "react-router-dom";
import "./AddBooks.css"; // Import external CSS file

const AddBooks = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isUpdating = location.state?.book ? true : false;

  const bookDetails = location.state?.book || {
    bookname: "",
    author: "",
    description: "",
    image: "",
    price: "",
  };

  const [bookData, setBookData] = useState(bookDetails);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!bookData.bookname || !bookData.author || !bookData.price) {
      alert("Please fill in all required fields!");
      setLoading(false);
      return;
    }

    try {
      if (isUpdating) {
        await axios.put(
          `http://localhost:1000/api/v1/update/${bookData._id}`,
          bookData
        );
        alert("Book Updated successfully!!!");
      } else {
        await axios.post("http://localhost:1000/api/v1/add", bookData);
        alert("Book added successfully!!!");
      }
      navigate("/");
      setBookData({
        bookname: "",
        description: "",
        author: "",
        image: "",
        price: "",
      });
    } catch (error) {
      alert("Failed to add Book");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-books-page">
      <div className="overlay">
        <div className="container book-form">
          <h3 className="text-center">
            {isUpdating ? "Update Book" : "Add Book"}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Book Name</label>
              <input
                type="text"
                className="form-control"
                name="bookname"
                value={bookData.bookname}
                onChange={handleChange}
                placeholder="Enter Book Name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Author</label>
              <input
                type="text"
                className="form-control"
                name="author"
                value={bookData.author}
                onChange={handleChange}
                placeholder="Enter The Name of Author"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                name="description"
                value={bookData.description}
                onChange={handleChange}
                placeholder="Enter The Description of the Book"
                rows="4"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <input
                type="text"
                className="form-control"
                name="image"
                value={bookData.image}
                onChange={handleChange}
                placeholder="Enter The URL of the Image"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                type="text"
                className="form-control"
                name="price"
                value={bookData.price}
                onChange={handleChange}
                placeholder="Enter The Price of the Book"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {loading ? (
                <span className="spinner-border spinner-border-sm"></span>
              ) : isUpdating ? (
                "Update Book"
              ) : (
                "Add Book"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AddBooks);
