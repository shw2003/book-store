import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

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

    try {
      if (isUpdating) {
        await axios.put(
          `http://localhost:1000/api/v1/update/${bookData._id}`,
          bookData
        );
        alert("Book Updated successfully!!!");
      } else {
        const response = await axios.post(
          "http://localhost:1000/api/v1/add",
          bookData
        );
        alert("Book added successfully!!!");

        console.log(response);
      }
      navigate("/");

      //set the fields empty
      setBookData({
        bookname: "",
        description: "",
        author: "",
        image: "",
        price: "",
      });
    } catch (error) {
      console.log("Error in adding Book", error);
      alert("Failed to add Book");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="bg-dark d-flex justify-content-center align-item-center"
      style={{ minHeight: "91.5vh" }}
    >
      <div className="container  p-3">
        <h3 className="text-white text-center">
          {isUpdating ? "Update Book" : "Add Book"}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 ">
            <label className="form-label text-white">Book Name</label>
            <input
              type="text"
              className="form-control"
              name="bookname"
              value={bookData.bookname}
              onChange={handleChange}
              placeholder="Enter Book Name"
            />
          </div>
          <div className="mb-3 ">
            <label className="form-label text-white">Author</label>
            <input
              type="text"
              className="form-control"
              name="author"
              value={bookData.author}
              onChange={handleChange}
              placeholder="Enter The Name of Author"
            />
          </div>
          <div className="mb-3 ">
            <label className="form-label text-white">Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              value={bookData.description}
              onChange={handleChange}
              placeholder="Enter The Description of the Book"
            />
          </div>
          <div className="mb-3 ">
            <label className="form-label text-white">Image</label>
            <input
              type="text"
              className="form-control"
              name="image"
              value={bookData.image}
              onChange={handleChange}
              placeholder="Enter The URL of the Image"
            />
          </div>
          <div className="mb-3 ">
            <label className="form-label text-white">Price</label>
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
            className="btn btn-success w-100"
            disabled={loading}
          >
            {loading
              ? "Processing..."
              : isUpdating
              ? "Update Book"
              : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
