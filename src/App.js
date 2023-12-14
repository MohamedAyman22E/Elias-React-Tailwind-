import "./App.css";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/skills.jsx";
function App() {
  return (
    <div className="bg-[#282c33] w-full">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
