import React from "react";
import "../styles/Header.css";
import icon from "./image.png";

function Header() {
  return (
    <div className="container-header">
      <nav className="nav">
        <img
          src={icon}
          className="logo-img"
          height="70px"
          width="70px"
          alt="sds"
        />
        <h1 className="logo">Covid19 Trackr</h1>
      </nav>
    </div>
  );
}

export default Header;
