import React from "react";
import Hero from "./components/Home/Hero";
import About from "./components/About/About";
// import Skills from "./components/Skills/Skills";
// import Projects from "./components/Projects/Projects";
// import Recommendations from "./components/Recommendations/Recommendations";
import Contact from "./components/Contact/ContactForm";

import "./styles/global.scss";

export default function App() {
  return (
    <div>
      <Hero />
      <About />
      {/*<Skills />
      <Projects />
      <Education />
      <Certifications />
      <Recommendations /> */}
      {/* <Contact /> */}

      {/* <footer className="footer">
        © {new Date().getFullYear()} Milind — Frontend Developer
      </footer> */}
    </div>
  );
}
