import React from "react";
import { Link } from "react-router-dom";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import blog2 from "../assets/blog2.jpg";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";



const projects = [
  { id: 1, title: "The Creation Of Longterm Value", desc: "At Segodaf Limited, we don’t just deliver projects — we create sustainable solutions that generate lasting value. From property development to advanced IT systems, our focus is on long-term impact for our clients and communities.", image: project1 },
  { id: 2, title: "Focus Is On Delivering Premium", desc: "Our commitment to excellence drives every service we provide — be it innovative tech solutions, premium real estate projects, or reliable construction services. We ensure every project meets the highest industry standards.", image: project2 },
];

// const gallery = [gallery1, gallery2, gallery3];


const blogs = [
  { id: 1, title: "The Future of Real Estate: How SegodafLimited is Transforming Property Development",image: project1  },
  { id: 2, title: "Building Tomorrow: How Our Construction Services Deliver Excellence", image: blog2},
  { id: 3, title: "Digital Solutions for Modern Businesses: SegodafLimited Approach to Tech Innovation", image:gallery1 },
  { id: 4, title: "Driving Business Growth with Segodaf’s Tech and Digital Strategies", image: gallery2 },
  { id: 5, title: "Smart Property Management: Leveraging Technology in Real Estate", image: gallery3 },
  // { id: 6, title: "After 19 Years Wright at Home Finds a New Space", image: "https://via.placeholder.com/400x250" },
];

const awards = [
  { 
    year: 2018, 
    awards: [
      "Best Emerging Tech Solutions Provider",
      "Excellence in Real Estate Development",
      "Innovative Construction Project Award"
    ] 
  },
  { 
    year: 2019, 
    awards: [
      "Top Digital Transformation Company",
      "Outstanding Property Management Firm",
      "Sustainable Building Excellence"
    ] 
  },
  { 
    year: 2020, 
    awards: [
      "Leader in Smart City Development",
      "Best Customer-Centric Real Estate Services",
      "Construction Safety & Quality Award"
    ] 
  }
];


const ProjectsPage = () => {
  return (
    <div className="projects-page">

      {/* Projects Section */}
      <section className="projects-section">
        {projects.map((proj, idx) => (
          <div key={proj.id} className={`project-item ${idx % 2 === 0 ? "left" : "right"}`}>
            <img src={proj.image} alt={proj.title} />
            <div className="project-content">
              <h2>{proj.title}</h2>
              <p>{proj.desc}</p>
            <Link to="/construction" className="btn">Discover more</Link>

            </div>
          </div>
        ))}
      </section>

      {/* Gallery Section */}
      {/* <section className="gallery-section">
        {gallery.map((img, idx) => (
          <img key={idx} src={img} alt={`gallery-${idx}`} />
        ))}
      </section> */}

      {/* Blog Section */}
      <section className="blog-section">
        <h2>From Our Blog</h2>
        <div className="blog-grid">
          {blogs.map(blog => (
            <div key={blog.id} className="blog-card">
              <img src={blog.image} alt={blog.title} />
              <h3>{blog.title}</h3>
<Link to="/services" className="btn">Read more</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards-section">
        <h2>Our Awards Winning</h2>
        <p>At Segodaf Limited, we take pride in delivering outstanding results across 
construction, technology, and real estate. Our commitment to quality and 
innovation has earned us recognition from industry leaders, honoring our 
dedication to building solutions that make a lasting impact.</p>
        <div className="awards-grid">
          {awards.map((item, idx) => (
            <div key={idx} className="award-item">
              <h3>{item.year}</h3>
              <ul>
                {item.awards.map((award, i) => <li key={i}>{award}</li>)}
              </ul>
            </div>
          ))}
        </div>
<Link to="/services" className="btn">Learn more</Link>
      </section>

    </div>
  );
};

export default ProjectsPage;
