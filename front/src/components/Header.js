import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
     <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h1>Proviz School of AI</h1>
      </Link>
      <nav>
        <a href="#about">About Us</a>
        <a href="/apply">Apply Now</a>
      </nav>
    </header>
  );
}

export default Header;
