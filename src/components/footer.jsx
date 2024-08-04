import React, { useState } from "react";
import axios from "axios";

function Footer() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/send-email", formData)
      .then((response) => {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        alert("Error sending message.");
      });
  };

  return (
    <footer>
      <div className="footer-container" id="foot">
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
                <form onSubmit={handleSubmit}>
                  <div className="user-info-input">
                    <div className="input-in">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="input-in">
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="input-in">
                      <input
                        type="number"
                        name="phone"
                        placeholder="Phone No."
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="input-in">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="text-area-detail">
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      cols="50"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="submit-btn">
                    <button type="submit">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
