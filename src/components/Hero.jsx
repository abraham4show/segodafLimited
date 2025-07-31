import React, { useState, useEffect } from "react";

import slide1 from "../assets/construction.jpg";
import slide2 from "../assets/realestate.jpg";
import slide3 from "../assets/tech.jpg";

const slides = [
  {
    id: 1,
    image: slide1,
    title: "Building the Future",
    text: "Transforming ideas into world-class construction projects with innovation and excellence.",
    button: "Explore Construction",
  },
  {
    id: 2,
    image: slide2,
    title: "Unlock Your Dream Home",
    text: "Your trusted partner in premium real estate solutions and property management.",
    button: "View Properties",
  },
  {
    id: 3,
    image: slide3,
    title: "Innovating with Technology",
    text: "Empowering businesses with cutting-edge IT solutions tailored to your needs.",
    button: "Discover IT Services",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-slider">
      <div
        className="slide"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className="overlay">
          <div className="slide-content">
            <h1>{slides[currentSlide].title}</h1>
            <p>{slides[currentSlide].text}</p>
            <button className="btn-primary">{slides[currentSlide].button}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
