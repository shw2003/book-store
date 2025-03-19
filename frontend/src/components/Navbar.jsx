import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/context/AuthContext"; // ✅ Ensure correct import

const Navbar = () => {
  const { token, logout } = useContext(AuthContext); // ✅ Use logout instead of setToken

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Book Store
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {!token ? (
              <>
                <Link className="nav-link" to="/signin">
                  Sign In
                </Link>
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/books">
                  Books
                </Link>
                <Link className="nav-link" to="/addBooks">
                  Add Books
                </Link>
                <button className="btn btn-danger" onClick={logout}>
                  Logout
                </button>{" "}
                {/* ✅ Call logout instead */}
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
