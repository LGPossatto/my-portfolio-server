const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const { mongoUri } = require("./config");
const { projectsRoute } = require("./routes/projectsRoute");

const app = express();
app.use(express.json());
app.use("/", express.static(__dirname + "/public", { extensions: ["html"] }));
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  app.use(cors());
  next();
});

app.use("/api/projects", projectsRoute);

app.use((_, res) => {
  res.status(404).sendFile(__dirname + "/public/error.html");
});

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database...");
    app.listen(5000, () => console.log("Now listening on port 5000..."));
  })
  .catch((err) => console.error(err));
