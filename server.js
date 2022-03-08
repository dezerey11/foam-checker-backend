const express = require("express");
require("dotenv").config();
const { PORT = 4000, SECRET } = process.env;
const mongoose = require("./db/db");
const ImageRouter = require("./controllers/image");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());

app.use(cors({ origin: "*" }));

app.use("/", ImageRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
