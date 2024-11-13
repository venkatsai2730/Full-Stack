import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ApplicationPage from "./pages/ApplicationPage";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <div className="home">
                <HeroSection />
                <AboutSection />
              </div>
            }
          />
          <Route path="/apply" element={<ApplicationPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
