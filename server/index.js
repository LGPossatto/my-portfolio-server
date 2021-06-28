const express = require("express");
const mongoose = require("mongoose");

const { mongoUri } = require("./config");
const { projectsRoute } = require("./routes/projectsRoute");

const app = express();
app.use(express.json());
app.use("/api/projects", projectsRoute);

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database...");
    app.listen(5000, () => console.log("Now listening on port 5000..."));
  })
  .catch((err) => console.error(err));
