import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Properties from "../components/Properties";
import CTA from "../components/CTA";
import CompanyOverview from "../components/companyOverview";


const Home = () => {
  return (
    <>
      <Hero />
       <CompanyOverview />
      <Services />
      <Properties />
      <CTA />
    </>
  );
};

export default Home;
