require("dotenv").config();
const mongoose = require("mongoose");
const config = { useUnifiedTopology: true, useNewUrlParser: true };
const { MONGODBURL } = process.env;

mongoose.connect(MONGODBURL, config);

mongoose.connection
  .on("open", () => {
    console.log("You are Connected to Mongo");
  })
  .on("close", () => console.log("Mongo Connection Closed"))
  .on("error", (error) => console.log(error));

module.exports = mongoose;
