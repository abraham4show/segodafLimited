import React from 'react';
import heroVideo from "../assets/construction.mp4";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
// --- Features ---
import { FaBuilding, FaUsersCog, FaHeadset } from "react-icons/fa";

function Construction() {
  return (
    <div className="construction-page">
      <Hero />
      <IconFeatures />
      <WhatWeOffer />
      <Statistics />
      <OurLatestProjects />
    
    </div>
  );
}



// --- Hero with Video ---
const Hero = () => (
  <section className="hero-section">
    <video src={heroVideo} autoPlay muted loop className="hero-video" />
    <div className="hero-overlay">
      <h1 className="hero-title">Building the Future Together</h1>
      <p className="hero-subtitle">Explore our latest construction projects and innovative services.</p>
      <button className="btn-primary">Learn More</button>
    </div>
  </section>
);


// --- Features ---
const IconFeatures = () => (
  <section className="features-section">
    <div className="container features-grid">
      <FeatureCard icon={<FaBuilding />} title="QUALITY WORK" text="We ensure top-notch quality in every project we deliver." />
      <FeatureCard icon={<FaUsersCog />} title="EXPERT ENGINEERS" text="Our team comprises highly skilled and experienced engineers." />
      <FeatureCard icon={<FaHeadset />} title="24/7 SUPPORT" text="We provide round-the-clock support for all your construction needs." />
    </div>
  </section>
);

const FeatureCard = ({ icon, title, text }) => (
  <div className="feature-card">
    <div className="feature-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);


// --- Services ---
const WhatWeOffer = () => (
  <section className="services-section">
    <h2 className="section-title">What We Offer</h2>
    <div className="container services-grid">
      <ServiceCard image={service1} title="Construction Management" description="We provide comprehensive general contracting services ensuring your project is completed on time and within budget." />
      <ServiceCard image={service2} title="interior design" description="Our expert team oversees every detail, from planning to execution, guaranteeing efficiency and seamless delivery." />
      <ServiceCard image={service3} title="Design-Build Services" description="Experience a streamlined process with our integrated design-build approach for innovative and cost-effective solutions." />
    </div>
  </section>
);

const ServiceCard = ({ image, title, description }) => (
  <div className="service-card">
    <img src={image} alt={title} />
    <div className="card-body">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

// --- Statistics ---
const Statistics = () => (
  <section className="stats-section">
    <div className="container stats-grid">
      <Stat number="50+" label="YEARS OF EXPERIENCE" />
      <Stat number="120+" label="PROJECTS COMPLETED" />
      <Stat number="10" label="AWARDS WON" />
      <Stat number="400+" label="HAPPY CLIENTS" />
    </div>
  </section>
);

const Stat = ({ number, label }) => (
  <div className="stat-card">
    <p className="stat-number">{number}</p>
    <p>{label}</p>
  </div>
);

// --- Projects ---
const OurLatestProjects = () => (
  <section className="projects-section">
    <h2 className="section-title">Our Latest Projects</h2>
    <div className="container projects-grid">
      <ProjectCard image={project1} title="Residential Complex" description="Luxury Apartments" />
      <ProjectCard image={project2} title="Modern Office Building" description="Commercial Space" />
      <ProjectCard image={project3} title="Road Construction & Street Lighting" description="Construction of durable roads integrated with energy-efficient street lighting solutions" />
    </div>
  </section>
);

const ProjectCard = ({ image, title, description }) => (
  <div className="project-card">
    <img src={image} alt={title} />
    <div className="card-body">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);



export default Construction;