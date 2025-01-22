import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#084C61",
          color: "#E3B505",
          padding: "50px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>Welcome to FlexiNote</h1>
        <p style={{ fontSize: "20px", color: "#ADEEE3" }}>
          Your one-stop solution to organize and manage your notes.
        </p>
        <div style={{ marginTop: "20px" }}>
          <Link
            to="/login"
            className="btn mx-2"
            style={{
              backgroundColor: "#DB504A",
              borderColor: "#DB504A",
              color: "white",
              padding: "10px 20px",
              fontSize: "18px",
            }}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="btn mx-2"
            style={{
              backgroundColor: "#DB504A",
              borderColor: "#DB504A",
              color: "white",
              padding: "10px 20px",
              fontSize: "18px",
            }}
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
