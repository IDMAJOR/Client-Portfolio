import React, { useEffect } from "react";
import "./components.css";
import { useNavigate } from "react-router-dom";

function AboutU() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  // Function to wrap each letter in a span
  const wrapLetters = () => {
    const pElement = document.getElementById("dynamic-text");
    if (pElement) {
      const text = pElement.textContent;
      const spans = [...text]
        .map((char) => `<span class="h-m-s">${char}</span>`)
        .join("");
      pElement.innerHTML = spans;
    }
  };

  // Use effect to run the wrapLetters function after the component has mounted
  useEffect(() => {
    wrapLetters();
  }, []);

  const text = `With a passion for creating intuitive and user-friendly digital experiences, I specialize in UI/UX design, blending creativity with analytical insight. My background in Statistics enhances my ability to understand user behavior and inform design decisions, ensuring that every interface is both visually appealing and easy to navigate.
Over the years, I've worked on diverse projects, from mobile app interfaces to web platforms, always prioritizing the user's journey. My skills in prototyping, user testing, and design iteration, coupled with tools like Adobe XD and Figma, allow me to deliver polished, user-centered solutions that meet client needs and exceed expectations.`;

  return (
    <div>
      <div
        className="box2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "3rem",
        }}
      >
        <div className="box-content">
          <div>
            <img
              src="HexagonalPattern.png"
              alt="paintbrush"
              style={{ width: "15rem" }}
            />
            <h1>UI/UX Design</h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "40rem",
              fontSize: "1.8rem",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <p id="dynamic-text" style={{ textAlign: "center" }}>
              {text}
            </p>
          </div>
          <button onClick={handleGoBack}>Go Back</button>
        </div>
      </div>
    </div>
  );
}

export default AboutU;
