import React, { useEffect } from "react";
import "./components.css";
import { useNavigate } from "react-router-dom";

function AboutD() {
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

  const text =
    "Combining a strong foundation in Statistics with a keen eye for detail, I specialize in Data Analytics, transforming raw data into actionable insights. My analytical expertise is complemented by a proficiency in tools such as MS Excel, Power BI, and SQL, enabling me to dissect complex datasets and provide clear, data-driven recommendations. In my role as a data analyst, I have worked on various projects that require meticulous data collection, analysis, and visualization. I believe in the power of data to inform strategic decisions and drive business success, always striving to uncover meaningful patterns and trends that can lead to informed actions.";

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
              src="ComboChart.png"
              alt="paintbrush"
              style={{ width: "15rem" }}
            />
            <h1>Data Analytics</h1>
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

export default AboutD;
