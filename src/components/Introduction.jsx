import React, { useState, useEffect } from "react";

const roles = [
  "Graphic Designer",
  "Data Analysis",
  "UI UX Designer",
  "Creative Thinker",
  "Problem Solver",
];

function Introduction() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-intro">
      <section id="introduction">
        <div className="introduction-con">
          <div className="into-text">
            <div className="text">
              <h2>Hello It’s Me</h2>
              <h1>Nwaneri Prosper</h1>
              <h3
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                i'm a{" "}
                <span
                  className="role"
                  style={{ color: "#efaf0b", borderRight: "1px solid white" }}
                >
                  {roles[currentRole]}
                </span>
              </h3>
              <div className="bio">
                <p>
                  Proficient in Adobe XD, Figma, MS Word, Excel, Power BI, and
                  SQL, I thrive on tackling complex design challenges. My
                  approach is rooted in thorough research, iterative
                  prototyping, and rigorous user testing, always striving to
                  find the perfect balance between creativity and practicality.
                </p>
              </div>
            </div>

            <div className="socials">
              <div className="s-in-con">
                <img src="Component1.png" alt="x-logo" />
                <img src="Component3.png" alt="facebook-logo" />
                <img src="Component4.png" alt="instagram-logo" />
              </div>
            </div>

            <button>Download CV</button>
          </div>
          <div className="into-image">
            <div style={{ position: "relative" }}>
              <img
                src="Group6.png"
                alt="hidden-photo"
                style={{ width: "110%" }}
              />
              <img
                src="PFP.png"
                alt="hidden-photo"
                className="difi"
                style={{ position: "absolute" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Introduction;
