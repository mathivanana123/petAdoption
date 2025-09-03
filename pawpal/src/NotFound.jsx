import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Oops! The page you're looking for doesn’t exist 🐾</p>

      <div className="notfound-img">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/616/616408.png" 
          alt="Lost Pet"
        />
      </div>

      <Link to="/" className="notfound-btn">⬅ Back to Home</Link>
    </div>
  );
};

export default NotFound;
