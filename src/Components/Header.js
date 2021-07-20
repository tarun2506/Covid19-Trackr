import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <div className="container-header">
      <nav className="nav">
        <img src="https://img.icons8.com/ios/60/000000/virus.png" />
        <h1 className="logo">Covid19 Trackr</h1>
      </nav>
    </div>
  );
}

export default Header;
