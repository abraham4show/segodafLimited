import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <h1 style={{ fontSize: "80px", marginBottom: "20px" }}>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you’re looking for doesn’t exist or has been moved.</p>
      <Link to="/" className="btn" style={{ marginTop: "20px", display: "inline-block" }}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
