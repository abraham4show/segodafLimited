
import React, { useState, useEffect } from "react";
import client from "../contentfulClient";
import propertyHero from "../assets/property-hero.jpg";
import sampleProperty from "../assets/sample-property.jpg"; // fallback image

const Property = () => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .getEntries({ content_type: "segodafLimited" }) // <-- FIXED CONTENT TYPE
      .then((res) => {
        const items = res.items.map((item) => ({
          id: item.sys.id,
          name: item.fields.name,
          price: item.fields.price
            ? `₦${item.fields.price.toLocaleString()}`
            : "Price on request",
          location: item.fields.location || "Location not specified",
          description: item.fields.description || "No description available.",
          gallery:
            item.fields.gallery?.map(
              (img) => "https:" + img.fields.file.url + "?w=800"
            ) || [], // fallback empty array if no gallery
        }));
        setProperties(items);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching properties:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="property-page">
      {/* Hero Section */}
      <section
        className="property-hero"
        style={{ backgroundImage: `url(${propertyHero})` }}
      >
        <div className="hero-overlay">
          <h1>Find Your Perfect Property</h1>
          <p>
            Explore our premium listings for residential, commercial, and
            investment properties.
          </p>
        </div>
      </section>

      {/* Property Listings */}
      <section className="property-listings">
        <h2>Available Properties</h2>

        {loading ? (
          <h3>Loading properties...</h3>
        ) : properties.length === 0 ? (
          <h1>No properties available right now. Please check back in 3 weeks!</h1>
        ) : (
          <div className="property-grid">
            {properties.map((property) => (
              <div className="property-card" key={property.id}>
                <img
                  src={property.gallery.length > 0 ? property.gallery[0] : sampleProperty}
                  alt={property.name}
                />
                <div className="property-info">
                  <h3>{property.name}</h3>
                  <p>{property.location}</p>
                  <span className="property-price">{property.price}</span>
                  <button
                    className="btn"
                    onClick={() => setSelectedProperty(property)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    {/* Modal */}
{selectedProperty && (
  <div
    className="modal-overlay"
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000, // Make sure it’s on top
    }}
    onClick={() => setSelectedProperty(null)}
  >
    <div
      className="modal-content"
      style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "10px",
        maxWidth: "800px",
        width: "90%",
        maxHeight: "90vh",
        overflowY: "auto",
        position: "relative",
        zIndex: 1001, // Ensure content is above overlay
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close X */}
      <button
        className="close-btn"
        onClick={() => setSelectedProperty(null)}
        style={{
          position: "absolute",
          top: "15px",
          right: "15px",
          background: "#ff4444",
          border: "none",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "5px",
          cursor: "pointer",
          zIndex: 1002,
        }}
      >
        X
      </button>

      <h2>{selectedProperty.name}</h2>
      <p><strong>Location:</strong> {selectedProperty.location}</p>
      <p><strong>Price:</strong> {selectedProperty.price}</p>
      <p>{selectedProperty.description}</p>
      <div className="modal-gallery">
        {selectedProperty.gallery?.length > 0 ? (
          selectedProperty.gallery.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery ${index}`}
              style={{
                width: "100%",
                maxWidth: "200px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
                margin: "5px",
              }}
            />
          ))
        ) : (
          <p>No additional images available.</p>
        )}
      </div>

      {/* Big Cancel Button at Bottom */}
      <button
        className="btn cancel-btn"
        onClick={() => setSelectedProperty(null)}
        style={{
          marginTop: "20px",
          background: "#ccc",
          color: "#333",
          padding: "12px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Cancel
      </button>
    </div>
  </div>
)}



    </div>
  );
};

export default Property;
