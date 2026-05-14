import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}