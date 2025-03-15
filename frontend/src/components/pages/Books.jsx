import React, { useEffect, useState } from "react";
import axios from "axios";
import BooksSection from "./BooksSection";

const Books = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("http://localhost:1000/api/v1/getAllBooks")
        .then((res) => setData(res.data));
    };
    fetch();
  }, []);
  return (
    <div className="bg-dark" style={{ minHeight: "90vh" }}>
      <div className="d-flex justify-content-center align-items-center py-3">
        <h4 className="text-white">Book Section</h4>
      </div>
      {data ? (
        <BooksSection dataBook={data} setDataBook={setData} />
      ) : (
        <div className="text-white">Loading.......</div>
      )}
    </div>
  );
};

export default Books;
