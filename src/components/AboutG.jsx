import React, { useEffect } from "react";
import "./components.css";
import { useNavigate } from "react-router-dom";

function AboutG() {
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

  const text = `As a seasoned graphic designer, I bring over 5 years of experience in creating visually captivating designs that communicate brand stories and engage audiences. My portfolio includes a wide range of projects, from eye-catching banners to intricate illustrations, each crafted with attention to detail and a deep understanding of visual aesthetics.My design philosophy is rooted in the belief that great design is both beautiful and functional. I leverage my expertise in Adobe XD, Figma, and other industry-standard tools to produce high-quality graphics that not only look stunning but also align with the client's brand and messaging.`;

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
              src="Paintbrush.png"
              alt="paintbrush"
              style={{ width: "15rem" }}
            />
            <h1>Graphic Design</h1>
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

export default AboutG;
