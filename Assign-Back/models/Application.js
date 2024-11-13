const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  statement: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Application", applicationSchema);
