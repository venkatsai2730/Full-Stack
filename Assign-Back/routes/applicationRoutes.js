const express = require("express");
const { submitApplication } = require("../controllers/applicationController");

const router = express.Router();

// POST route to handle application form submission
router.post("/", submitApplication);

module.exports = router;
