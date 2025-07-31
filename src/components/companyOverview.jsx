// src/components/CompanyOverview.jsx
import React from "react";
import { FaLaptopCode, FaBuilding, FaTools } from "react-icons/fa";

const CompanyOverview = () => {
  return (
    <section className="company-overview">
      <h2>Your One-Stop Solution for Construction, Technology & Property Services</h2>
      <p className="tagline">BUILDING THE FUTURE WITH INNOVATION AND INTEGRITY</p>

      <div className="overview-grid">
        <a href="/services/digital" className="overview-card">
          <FaLaptopCode className="overview-icon" />
          <h3>DIGITAL SOLUTIONS</h3>
          <ul>
            <li>Web/Mobile App Development</li>
            <li>Cloud Computing</li>
            <li>Digital Marketing</li>
          </ul>
        </a>
        <a href="/services/real-estate" className="overview-card">
          <FaBuilding className="overview-icon" />
          <h3>ESTATE PROPERTY & REAL</h3>
          <ul>
            <li>Property Management</li>
            <li>Leasing & Renting</li>
            <li>Buying & Selling</li>
            <li>Consultation</li>
          </ul>
        </a>
        <a href="/services/construction" className="overview-card">
          <FaTools className="overview-icon" />
          <h3>CONSTRUCTION & MAINTENANCE</h3>
          <ul>
            <li>Building Contracting & Repairs</li>
            <li>Plumbing & Fittings</li>
            <li>Cleaning Services</li>
          </ul>
        </a>
      </div>
    </section>
  );
};

export default CompanyOverview;
