const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const applicationRoutes = require("./routes/applicationRoutes");
const connectDB = require("./config/db");

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
// Middleware
app.use(express.json());


// Routes
app.use("/api/apply", applicationRoutes);

// Connect to MongoDB and start server
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
