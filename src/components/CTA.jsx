import React from "react";
import { motion } from "framer-motion";
import bannerImage from "../assets/real-estate.jpg"; // <-- import your image

const CTA = () => {
  return (
    <section 
      className="cta"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "5rem 2rem",
        textAlign: "center",
        color: "#fff"
      }}
      data-aos="fade-up"
    >
      <motion.div 
        className="cta-content"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Ready to Start Your Journey?</h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Let's bring your dream project to life with Segodaf Limited.
        </p>
        <a 
          href="/contact" 
          style={{
            background: "#1B9AAA",
            color: "#fff",
            padding: "0.8rem 1.8rem",
            borderRadius: "5px",
            textDecoration: "none",
            fontSize: "1.1rem"
          }}
        >
          Contact Us
        </a>
      </motion.div>
    </section>
  );
};

export default CTA;
