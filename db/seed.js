const { Image, ImageClassifications } = require("../models/Image");
const seedData = require("./foam-seed.json");
const mongoose = require("./db");

const seed = async () => {
  for (let i = 0; i < seedData.length; i++) {
    await Image.create({
      url: seedData[i].url,
      lastModified: seedData[i].lastModified,
      classification: ImageClassifications.UNCLASSIFIED,
    });
  }

  mongoose.connection.close();
};

seed();
