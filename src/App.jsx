import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experiment from "./Experiment";
import BackToTop from "./components/BackToTop";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 bg-neutral-950">
        <div className="relative mx-auto px-4 lg:px-20 min-h-screen">
          <Navbar />
          <Routes>
            {/* Main Portfolio Route */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Contact />
                </>
              }
            />
            {/* Experiment Route */}
            <Route path="/experiment" element={<Experiment />} />
          </Routes>
          {/* back to top button */}
          <BackToTop />
        </div>
      </div>
    </Router>
  );
};

export default App;
