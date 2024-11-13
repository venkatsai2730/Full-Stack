import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="hero">
      <h2>Unlock Your Potential in AI</h2>
      <p>Join the Proviz School of AI and learn from industry experts.</p>
      <Link to="/apply">
        <button>Apply Now</button>
      </Link>
    </section>
  );
}

export default HeroSection;
