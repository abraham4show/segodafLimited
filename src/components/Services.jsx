import React from "react";
import itImage from "../assets/it-services.jpg";
import constructionImage from "../assets/construction2.jpg";
import realEstateImage from "../assets/real-estate.jpg";

const Services = () => {
  const services = [
    { 
      title: "IT Solutions", 
      description: "Cutting-edge technology solutions tailored for your business growth.", 
      image: itImage 
    },
    { 
      title: "Construction", 
      description: "Expert construction services with a commitment to excellence and safety.", 
      image: constructionImage 
    },
    { 
      title: "Real Estate", 
      description: "Buy, sell, or rent properties with ease through our trusted network.", 
      image: realEstateImage 
    }
  ];

  return (
    <section className="services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );

};



export default Services;
