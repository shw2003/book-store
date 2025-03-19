import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // ✅ Correct import
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AddBooks from "./components/pages/AddBooks";
import Books from "./components/pages/Books";
import Home from "./components/pages/Home";
import ThankYou from "./components/pages/ThankYou";
import Failure from "./components/pages/Failure";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import { AuthContext } from "./components/context/AuthContext"; // ✅ Import AuthContext

function App() {
  const { token } = useContext(AuthContext); // ✅ Check if user is logged in

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        {/* ✅ Protect the Books and AddBooks routes */}
        <Route
          path="/books"
          element={token ? <Books /> : <Navigate to="/signin" />}
        />
        <Route
          path="/addBooks"
          element={token ? <AddBooks /> : <Navigate to="/signin" />}
        />
        <Route
          path="/update/:id"
          element={token ? <AddBooks /> : <Navigate to="/signin" />}
        />
        <Route path="/thank-you" element={<ThankYou />} />{" "}
        {/* ✅ Correct path */}
        <Route path="/payment-failed" element={<Failure />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
