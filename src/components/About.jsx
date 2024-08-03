import React from "react";

function About() {
  return (
    <div className="about-container">
      <section id="about">
        <div className="about-content">
          <div className="about-image-container">
            <div>
              <img src="Group6.png" alt="Profile Photo" />
            </div>
          </div>
          <div className="about-text">
            <div className="text">
              <h1>
                About <span style={{ color: "#EFAF0B" }}>Me</span>
              </h1>
              <h3>UI/UX Designer & Data Analytics</h3>
              <div className="bio">
                <p>
                  Hello! I'm Nwaneri Prosper Joseph, a passionate UI/UX designer
                  with a keen eye for detail and a love for creating intuitive
                  and engaging digital experiences. With a background in
                  Statistics, I specialize in UI/UX design and Data Analytics.
                </p>
              </div>
            </div>

            <button>Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
