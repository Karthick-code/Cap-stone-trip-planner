const express = require("express");
const router = express.Router();
const Destination = require("../models/Destinations");
// Get all Destinations
router.get("/", async (req, res) => {
  const destinations = await Destination.find({});
  res.send(destinations);
});

// Add a new Destination
router.post("/", async (req, res) => {
  const { name, description, images, location } = req.body;
  const destination = new Destination({
    name,
    description,
    images,
    location,
  });
  await destination.save();
  res.send(destination);
});


module.exports = router;