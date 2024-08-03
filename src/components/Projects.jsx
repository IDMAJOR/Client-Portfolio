import React from "react";

function Projects() {
  return (
    <div className="project-container">
      <section id="project">
        <div className="sm-in-con">
          <div className="project-content">
            <div className="project-title-container">
              <div>
                <h1>
                  My <span style={{ color: "#EFAF0B" }}>Projects</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="image-box-con">
            <div className="images">
              <div className="image-div">
                <img src="img2.png" alt="img" />
              </div>
              <div className="image-div">
                <img src="img1.png" alt="img" />
              </div>
              <div className="image-div">
                <img src="img3.png" alt="img" />
              </div>
              <div className="image-div">
                <img src="img6.png" alt="img" />
              </div>
              <div className="image-div">
                <img src="img5.png" alt="img" />
              </div>
              <div className="image-div">
                <img src="img4.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
