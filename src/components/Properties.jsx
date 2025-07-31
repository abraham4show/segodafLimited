import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
import { useNavigate } from "react-router-dom";

const Properties = () => {
  const navigate = useNavigate(); // ✅ Move inside the component

  const properties = [
    { name: "Mafoluku, Oshodi", price: "₦300,000,000", location: "Lagos, Nigeria", image: house1 },
    { name: "Kola, Alakuko", price: "₦120,000,000", location: "Lagos, Nigeria", image: house2 },
    { name: "Sango, Ota", price: "₦60,000,000", location: "Lagos, Nigeria", image: house3 },
    { name: "GRA, Ikeja", price: "₦350,000,000", location: "Lagos, Nigeria", image: house4 },
  ];

  return (
    <section className="featured-properties">
      <h2 className="section-title">Featured Listing</h2>
      <p className="section-subtitle">
        Explore An Exquisite Selection Of Featured Listings At Segodaf Limited – Where Comfort Meets Flawless Craftsmanship.
      </p>
      <div className="properties-grid">
        {properties.map((property, index) => (
          <div key={index} className="property-card">
            <div className="property-image">
              <img src={property.image} alt={property.name} />
              <span className="property-price">{property.price}</span>
            </div>
            <h3>{property.name}</h3>
            <div className="property-location">
              <FaMapMarkerAlt /> {property.location}
            </div>
          </div>
        ))}
      </div>
      <button 
        className="see-more"
        onClick={() => navigate("/properties")}
      >
        See More
      </button>
    </section>
  );
};

export default Properties;
