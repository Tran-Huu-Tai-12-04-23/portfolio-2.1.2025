import "./assets/css/index.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {

  return (
    <>
      <Header />
       <Hero />
          <Skills />
          <Experience />
          <Education />
          <Projects/>
          <Contact />
    </>
  );
}
