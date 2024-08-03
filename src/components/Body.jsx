import React from "react";
import NavBar from "./NavBar";
import Footer from "./footer";
import Introduction from "./Introduction";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";

function Body() {
  return (
    <div>
      <NavBar />
      <div>
        <Introduction />
        <About />
        <Services />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default Body;
