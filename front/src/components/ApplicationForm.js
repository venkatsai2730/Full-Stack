import React, { useState } from "react";
import axios from "axios";
import './ApplicationForm.css';

function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    statement: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/apply`, formData); // Removed response
      setStatus("Application submitted successfully!");
  
      // After 1.5 seconds, navigate to the home page
      setTimeout(() => {
        window.location.href = "/"; // Redirect to home page
      }, 1500);
    } catch (error) {
      setStatus("Error submitting application. Please try again later.");
    }
  };
  

  return (
    <section id="apply">
      <h3>Application Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <textarea
          name="statement"
          placeholder="Why do you want to join?"
          required
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {status && <p>{status}</p>}
    </section>
  );
}

export default ApplicationForm;
