import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import ITServices from "./pages/ITServices.jsx";
import RealEstate from "./pages/RealEstate.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";
import ProjectsPage from "./pages/ProjectsPage";
import Services from "./pages/Service.jsx";
import Property from "./pages/Properties.jsx";
import Construction from "./pages/Construction.jsx";
import NotFound from "./pages/NotFound";
function App() {
  // Initialize AOS on app load
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <Router>
      {/* Navbar stays visible on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/it-services" element={<ITServices />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Properties" element={<Property />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
