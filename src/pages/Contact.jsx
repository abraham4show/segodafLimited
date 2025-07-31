import React, { useState } from "react";
import contactHero from "../assets/contact-bcg.jpg";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/meqygroa", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      setShowPopup(true);
      form.reset();

      // Hide popup after 5 seconds
      setTimeout(() => setShowPopup(false), 5000);
    } else {
      setStatus("ERROR");
      setShowPopup(true);

      // Hide popup after 5 seconds
      setTimeout(() => setShowPopup(false), 5000);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section 
        className="contact-hero"
        style={{ backgroundImage: `url(${contactHero})` }}
      >
        <div className="overlay">
          <div className="contact-hero-text">
            <h1>Get In Touch</h1>
            <p>Have a project in mind? Questions about our services? We’re here to help you bring your ideas to life.</p>
            <a href="#contact-form" className="btn btn-primary">Send a Message</a>
          </div>
        </div>
      </section>

      {/* Feedback Popup */}
      {showPopup && (
        <div className={`popup ${status === "SUCCESS" ? "success" : "error"}`}>
          {status === "SUCCESS"
            ? "Your message was sent successfully! We will respond shortly."
            : "Oops! Something went wrong. Please try again."}
        </div>
      )}

      {/* Contact Form */}
      <section className="contact-form-section" id="contact-form">
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Subject
            <input type="text" name="subject" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required></textarea>
          </label>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
