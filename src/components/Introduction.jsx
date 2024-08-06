import React, { useState, useEffect, useRef } from "react";

const roles = [
  "Graphic Designer",
  "Data Analyst",
  "UI UX Designer",
  "Creative Thinker",
  "Problem Solver",
];

function Introduction() {
  const [currentRole, setCurrentRole] = useState(0);
  const roleRef = useRef(null);

  useEffect(() => {
    // Start the animation when the component mounts
    if (roleRef.current) {
      roleRef.current.style.animationPlayState = "running";
    }

    // Interval to change the role every 2 seconds
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000); // 2000ms matches the CSS animation duration

    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
      if (roleRef.current) {
        roleRef.current.style.animationPlayState = "paused";
      }
    };
  }, [roles.length]);

  return (
    <div className="container-intro" id="home">
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
                I'm a{" "}
                <span
                  className="role"
                  ref={roleRef}
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
                <a href="https://x.com/tiv_ity/">
                  <img src="Component1.png" alt="x-logo" />
                </a>
                <a href="https://www.facebook.com/share/cgTbNXGfezsQwxSM/?mibextid=qi2Omg">
                  <img src="Component3.png" alt="facebook-logo" />
                </a>
                <a href="https://www.instagram.com/tiv_ity_?igsh=MWpsam5jeWI0cDl2Mw==">
                  <img src="Component4.png" alt="instagram-logo" />
                </a>
              </div>
            </div>

            <a href="NwaneriProsper-WPSOfficeportfolio1.docx" download>
              <button>Download CV</button>
            </a>
          </div>
          <div className="into-image">
            <div style={{ position: "relative" }}>
              <img
                src="Group6.png"
                alt="hidden-photo"
                style={{ width: "83%" }}
              />
              <div
                style={{
                  position: "absolute",
                  right: "-10px",
                }}
                className="difi"
              >
                <img src="PFP.png" alt="hidden-photo" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Introduction;
