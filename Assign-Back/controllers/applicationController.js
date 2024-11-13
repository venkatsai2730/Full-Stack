const Application = require("../models/Application");

// Function to handle form submission and save data to MongoDB
exports.submitApplication = async (req, res) => {
  try {
    const { name, phone, email, statement } = req.body;
    
    // Basic validation
    if (!name || !phone || !email || !statement) {
      return res.status(400).json({ error: "All fields are required" });
    }
    
    // Save to database
    const application = new Application({ name, phone, email, statement });
    await application.save();
    
    res.status(201).json({ message: "Application submitted successfully" });
  } catch (error) {
    console.error("Error submitting application:", error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};
