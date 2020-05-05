import React from "react";
import "./styles.css";
import Top from "./components/top/Top";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Contact from "./components/contact/Contact"

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Top />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
