import React from "react";
import { FaLaptopCode, FaBuilding, FaTools, FaUsers, FaGlobe, FaChartLine } from "react-icons/fa";
import servicesHero from "../assets/services-bcg.jpg";
import ProjectPage from "./ProjectsPage.jsx";

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
     <section 
  className="services-hero"
   style={{
    backgroundImage: `url(${servicesHero})`,
  }}
>
  <div className="hero-overlay">
    <h1>A Service for Every Goal</h1>
    <p>
      Discover our wide range of specialist services, from financial and investment
      advice to valuation, planning, and property management.
    </p>
  </div>
</section>


      {/* Highlights Section */}
      <section className="service-highlights">
        <div className="highlight-card">
          <FaGlobe className="highlight-icon" />
          <h3>300+</h3>
          <p>Offices and Associates Worldwide</p>
        </div>
        <div className="highlight-card">
          <FaUsers className="highlight-icon" />
          <h3>700+</h3>
          <p>Dedicated Employees</p>
        </div>
        <div className="highlight-card">
          <FaChartLine className="highlight-icon" />
          <h3>42,000+</h3>
          <p>Expert Researchers</p>
        </div>
        <div className="highlight-card">
          <FaTools className="highlight-icon" />
          <h3>200+</h3>
          <p>Successful Projects Delivered</p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="service-categories">
        <h2>Services to Fulfill Your Needs</h2>
        <div className="categories-grid">
          <div className="service-card">
            <FaLaptopCode className="service-icon" />
            <h3>Digital Solutions</h3>
            <p>Web/Mobile App Development, Cloud Computing, and Digital Marketing tailored to your business needs.</p>
            <a href="/services" className="btn">Learn More</a>
          </div>
          <div className="service-card">
            <FaBuilding className="service-icon" />
            <h3>Real Estate & Property</h3>
            <p>From property management to leasing, buying, and selling, we simplify real estate for you.</p>
            <a href="/properties" className="btn">Learn More</a>
          </div>
          <div className="service-card">
            <FaTools className="service-icon" />
            <h3>Construction & Maintenance</h3>
            <p>Reliable construction, repairs, plumbing, fittings, and cleaning services with quality assurance.</p>
            <a href="/construction" className="btn">Learn More</a>
          </div>
        </div>
      </section>

      
          <ProjectPage />
{/* Call-to-Action */}
      {/* <section className="services-cta">
        <h2>Ready to Get Started?</h2>
        <p>Contact Segodaf Limited today to explore how our services can help you achieve your goals.</p>
        <a href="/contact" className="btn">Contact Us</a>
      </section> */}
    </div>

  );
};


export default Services;
