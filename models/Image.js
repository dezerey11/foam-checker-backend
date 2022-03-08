const { Schema, model } = require("mongoose");

const ImageClassifications = {
  UNCLASSIFIED: "UNCLASSIFIED",
  FOAMING: "FOAMING",
  NOT_FOAMING: "NOT_FOAMING",
};

const ImageSchema = new Schema(
  {
    url: { type: String },
    lastModified: { type: String },
    classification: {
      type: String,
      default: ImageClassifications.UNCLASSIFIED,
    },
  },
  { timestamps: true }
);

const Image = model("Image", ImageSchema);

module.exports = {
  Image,
  ImageClassifications,
};
