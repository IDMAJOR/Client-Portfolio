import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="service-container" id="ser">
      <section id="service">
        <div className="service-content">
          <div className="service-title-container">
            <div>
              <h1>
                My <span style={{ color: "#EFAF0B" }}>Services</span>
              </h1>
            </div>
          </div>
          <div className="service-box-con">
            <div className="box">
              <div className="box-content">
                <div>
                  <img src="Paintbrush.png" alt="paintbrush" />
                  <h1>Graphic Design</h1>
                </div>
                <div>
                  <p>
                    As a seasoned graphic designer, I bring over 5 years of
                    experience in creating visually captivating designs that
                    communicate...
                  </p>
                </div>
                <Link to="/aboutG">
                  <button>Read More</button>
                </Link>
              </div>
            </div>
            <div className="box">
              <div className="box-content">
                <div>
                  <img src="HexagonalPattern.png" alt="HexagonalPattern" />
                  <h1>UI UX Design</h1>
                </div>
                <div>
                  <p>
                    With a passion for creating intuitive and user-friendly
                    digital experiences, I specialize in UI/UX design, blending
                    creativity...
                  </p>
                </div>
                <Link to="/aboutU">
                  <button>Read More</button>
                </Link>
              </div>
            </div>
            <div className="box">
              <div className="box-content">
                <div>
                  <img src="ComboChart.png" alt="ComboChart" />
                  <h1>Data Analysis</h1>
                </div>
                <div>
                  <p>
                    Combining a strong foundation in Statistics with a keen eye
                    for detail, I specialize in Data Analytics, transforming raw
                    data into...
                  </p>
                </div>
                <Link to="/aboutD">
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
