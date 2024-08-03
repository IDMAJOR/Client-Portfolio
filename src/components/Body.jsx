import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import Introduction from "./Introduction";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import NotAvailable from "./NotAvailable";

function Body() {
  return (
    <>
      <div className="view">
        <NavBar />
        <div>
          <Introduction />
          <About />
          <Services />
          <Projects />
        </div>
        <Footer />
      </div>
      <NotAvailable />
    </>
  );
}

export default Body;
