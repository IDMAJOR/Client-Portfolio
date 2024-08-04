import React, { useState } from "react";
import "./components.css";

function NavBar() {
  return (
    <div className="nav-container">
      <div className="fixed-nav">
        <nav>
          <div className="logo">
            <img src="Group5.png" alt="logo" />
          </div>
          <div className="nav-bar">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#ser">Skill</a>
              </li>
              <li>
                <a href="#pro">Projects</a>
              </li>
              <li>
                <a href="#foot">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
