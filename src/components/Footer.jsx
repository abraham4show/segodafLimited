import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & About */}
        <div className="footer-logo">
          <h2>Segodaf Limited</h2>
          <p>Your One-Stop Solution for Construction, IT & Real Estate.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/properties">Properties</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Timeline Section */}
        <div className="footer-timeline">
          <h4>Our Journey</h4>
          <ul>
            <li><strong>2018:</strong> Segodaf Limited was founded.</li>
            <li><strong>2020:</strong> Expanded into IT Solutions.</li>
            <li><strong>2023:</strong> Launched Real Estate Division.</li>
          </ul>
        </div>

        {/* Contact with Icons */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p><FaMapMarkerAlt className="footer-icon" /> 123 Segodaf Street, Lagos, Nigeria</p>
          <p><FaEnvelope className="footer-icon" /> info@segodaf.com</p>
          <p><FaPhone className="footer-icon" /> +234 800 000 0000</p>
        </div>
      </div>

      {/* Social Media */}
      <div className="footer-social">
        <a href="https://facebook.com/segodaf"><FaFacebook /></a>
        <a href="https://instagram.com/segodaf"><FaInstagram /></a>
        <a href="https://twitter.com/segodaf"><FaTwitter /></a>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Segodaf Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
