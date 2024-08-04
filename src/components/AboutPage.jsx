import React from "react";
import { useNavigate } from "react-router-dom";

function AboutPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
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
                    Hello! I'm Nwaneri Prosper Joseph, a passionate UI/UX
                    designer with a keen eye for detail and a love for creating
                    intuitive and engaging digital experiences. With a
                    background in Statistics, I specialize in UI/UX design and
                    Data Analytics. Over the past 5+ years, I've had the
                    privilege of working on diverse projects, ranging from
                    designing banners to crafting app interfaces. My design
                    philosophy revolves around putting the user first, ensuring
                    that every interface is not only visually appealing but also
                    easy to use and navigate. I'm skilled in using tools like
                    Adobe XD, Figma, MS Word, Excel, Power BI, and SQL. I thrive
                    on solving complex design challenges through research,
                    prototyping, and user testing. I believe that great design
                    is a blend of creativity and functionality, and I'm always
                    eager to explore new ideas and technologies. When I'm not
                    designing, you can find me learning new skills, analyzing
                    data, gaming, or delving into user psychology. I'm always
                    excited to connect with fellow designers, clients, and
                    anyone interested in creating exceptional digital
                    experiences. Feel free to reach out to discuss new projects,
                    collaborations, or just to say hello! prospectjoe5@gmail.com
                  </p>
                </div>
              </div>

              <button onClick={handleGoBack}>Go Back</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
