import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <section id="footer">
          <div className="fm-in-con">
            <div className="footer-content">
              <div className="footer-title-container">
                <div>
                  <h1>
                    Contact <span style={{ color: "#EFAF0B" }}>Me</span>
                  </h1>
                </div>
              </div>
              <div className="footer-inputs-div">
                <div className="user-info-input">
                  <div className="input-in">
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className="input-in">
                    <input type="text" placeholder="Last Name" />
                  </div>
                  <div className="input-in">
                    <input type="number" placeholder="Phone No." />
                  </div>
                  <div className="input-in">
                    <input type="email" placeholder="Email Address" />
                  </div>
                </div>
                <div className="text-area-detail">
                  <textarea
                    name="message"
                    id="message"
                    maxLength="200"
                    rows="4"
                    cols="50"
                    placeholder="Your Message"
                  />
                </div>
                <div className="submit-btn">
                  <button>Send</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
