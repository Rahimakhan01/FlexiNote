import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#084C61" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span style={{ color: "#E3B505" ,fontWeight: "bold" }}>Flexi</span>
          <span style={{ color: "#ADEEE3" , fontWeight: "bold"}}>Note</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link
              className="btn mx-1"
              to="/login"
              role="button"
              style={{
                backgroundColor: "#DB504A",
                borderColor: "#DB504A",
                color: "white",
              }}
            >
              Login
            </Link>
            <Link
              className="btn mx-1"
              to="/signup"
              role="button"
              style={{
                backgroundColor: "#DB504A",
                borderColor: "#DB504A",
                color: "white",
              }}
            >
              Signup
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
