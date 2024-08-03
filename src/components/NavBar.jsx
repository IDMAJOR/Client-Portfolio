import React from "react";
import "./components.css";

function NavBar() {
  return (
    <div className="nav-container">
      <nav>
        <div className="logo">
          <img src="Group5.png" alt="logo" />
        </div>
        <div className="nav-bar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skill</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
