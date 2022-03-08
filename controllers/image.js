const { Router } = require("express");
const router = Router();
const { Image } = require("../models/Image");
const mongoose = require("../db/db");

// GET ALL IMAGES
router.get("/images", async (req, res) => {
  try {
    const images = await Image.find({});
    res.json({ images });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET CLASSIFIED IMAGES
router.get("/images/classification/:classification", async (req, res) => {
  try {
    const images = await Image.find({
      classification: req.params.classification,
    });
    res.json({ images });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//  UPDATE CLASSIFICATION
router.patch("/images/:id", async (req, res) => {
  console.log(req.body); //{ classification: 'NOT_FOAMING' }
  try {
    const id = req.params.id;
    const image = await Image.findByIdAndUpdate(
      { _id: id },
      { classification: req.body.classification },
      { new: true }
    );
    res.json(image);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
