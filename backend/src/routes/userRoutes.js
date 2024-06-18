// src/routes/userRoutes.js
const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/admin", protect(["admin"]), (req, res) => {
  res.status(200).json({ message: "Admin content" });
});

router.get("/vendor", protect(["vendor"]), (req, res) => {
  res.status(200).json({ message: "Vendor content" });
});

router.get("/user", protect(["user", "vendor", "admin"]), (req, res) => {
  res.status(200).json({ message: "User content" });
});

module.exports = router;
