// src/components/Navbar.js
import React from "react";
import "../styles/Navbar.module.css"; // You can adjust your styling here

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <p>
          Movie<span>Search</span>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
