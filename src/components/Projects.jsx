import React, { useRef } from "react";

const imgSrc = [
  "img1.png",
  "img2.png",
  "img3.png",
  "img4.png",
  "img5.png",
  "img6.png",
];

function Projects() {
  const imgRefs = useRef([]);

  // Initialize the refs array
  imgRefs.current = [];

  const handleFullscreen = (index) => {
    const img = imgRefs.current[index];

    if (img) {
      if (img.requestFullscreen) {
        img.requestFullscreen();
      } else if (img.mozRequestFullScreen) {
        img.mozRequestFullScreen();
      } else if (img.webkitRequestFullscreen) {
        img.webkitRequestFullscreen();
      } else if (img.msRequestFullscreen) {
        img.msRequestFullscreen();
      }

      // Add a fullscreen class when entering fullscreen mode
      img.classList.add("fullscreen-img");

      // Event listener to remove the class when exiting fullscreen mode
      document.addEventListener("fullscreenchange", () => {
        if (!document.fullscreenElement) {
          img.classList.remove("fullscreen-img");
        }
      });
    }
  };

  return (
    <div className="project-container" id="pro">
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
              {imgSrc.map((src, index) => (
                <div
                  className="image-div"
                  style={{ padding: "1rem" }}
                  key={index}
                >
                  <img
                    src={src}
                    alt={`img-${index}`}
                    className="img-src"
                    ref={(el) => (imgRefs.current[index] = el)}
                  />
                  <div style={{ overflow: "hidden" }}>
                    <div className="h-translate">
                      <h5>Graphic Design</h5>
                      <p>
                        A uniquely crafted graphic design banner created with
                        Photoshop, showcasing creative techniques and attention
                        to detail.
                      </p>
                      <button onClick={() => handleFullscreen(index)}>
                        <img src="ExternalLink.png" alt="ExternalLink" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
