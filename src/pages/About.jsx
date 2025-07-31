import React from "react";
import aboutHero from "../assets/about-hero.jpg"; // Add a nice hero image
import { FaHandshake, FaLightbulb, FaUsers, FaBuilding } from "react-icons/fa";
import missionImg from "../assets/tech.jpg";
import visionImg from "../assets/vision.jpg";

const About = () => {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section 
        className="about-hero"
        style={{ backgroundImage: `url(${aboutHero})`,
        
       }}
      >
        <div className="about-hero-overlay">
          <h1>About Segodaf Limited</h1>
          <p>Building the future with innovation, integrity, and excellence.</p>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="about-overview">
        <div className="overview-container">
          <h2>Who We Are</h2>
          <p>
            Segodaf Limited is your one-stop solution for Construction, IT, and Real Estate. 
            We combine innovation, expertise, and dedication to deliver top-notch services 
            tailored to meet your needs. Our team of professionals ensures excellence 
            in every project we undertake.
          </p>
          <div className="about-stats">
            <div><h3>10+</h3><p>Years of Experience</p></div>
            <div><h3>345+</h3><p>Projects Completed</p></div>
            <div><h3>200+</h3><p>Properties Managed</p></div>
            <div><h3>300+</h3><p>Happy Clients</p></div>
          </div>
        </div>
      </section>

    {/* CORE VALUES */}
<section className="about-values">
  <h2>Our Core Values</h2>
  <div className="values-grid">
    <div className="value-card">
      <FaHandshake size={40} className="value-icon" />
      <h3>Integrity</h3>
      <p>We uphold transparency and honesty in all our dealings.</p>
    </div>
    <div className="value-card">
      <FaLightbulb size={40} className="value-icon" />
      <h3>Innovation</h3>
      <p>We embrace creative solutions to deliver outstanding results.</p>
    </div>
    <div className="value-card">
      <FaUsers size={40} className="value-icon" />
      <h3>Collaboration</h3>
      <p>We work closely with our clients to bring their visions to life.</p>
    </div>
    <div className="value-card">
      <FaBuilding size={40} className="value-icon" />
      <h3>Excellence</h3>
      <p>We strive for the highest quality in every project we handle.</p>
    </div>
  </div>
</section>



{/* MISSION & VISION */}
<section className="about-mission-vision">
  <h2>Our Mission & Vision</h2>
  <div className="mv-wrapper">
    {/* Mission */}
    <div className="mv-card">
      <img src={missionImg} alt="Our Mission" />
      <div className="mv-text">
        <h3>Our Mission</h3>
        <p>
          To provide innovative and reliable solutions in Construction, IT,
          and Real Estate, ensuring customer satisfaction and long-term value.
        </p>
      </div>
    </div>

    {/* Vision */}
    <div className="mv-card">
      <img src={visionImg} alt="Our Vision" />
      <div className="mv-text">
        <h3>Our Vision</h3>
        <p>
          To be a leading force in shaping the future of construction, technology,
          and property services across Africa and beyond.
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default About;
