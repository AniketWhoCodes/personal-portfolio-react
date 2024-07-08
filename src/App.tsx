import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contanct ";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Project";
import Skills from "./components/Skills/Skills";
import FixSocialIcon from "./components/SocialIcons/FixSocialIcon";
import ScrollToTop from "./components/SocialIcons/ScrollToTop";

export default function App() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <FixSocialIcon />
      <Footer />
      <ScrollToTop />
    </>
  );
}
