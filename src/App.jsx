import React from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import CursorFollower from "./components/CursorFollower.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import BusinessValue from "./components/BusinessValue.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Results from "./components/Results.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import EducationWhy from "./components/EducationWhy.jsx";
import Process from "./components/Process.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full bg-white dark:bg-inkrose-950 text-inkrose-900 dark:text-white font-body transition-colors duration-300">
        <CursorFollower />
        <Navbar />
        <Hero />
        <BusinessValue />
        <About />
        <Services />
        <Results />
        <Experience />
        <Projects />
        <Skills />
        <EducationWhy />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
