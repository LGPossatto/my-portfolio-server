const express = require("express");
const { ProjectModel } = require("../models/projectModel");

const projectsRoute = express.Router();

projectsRoute.get("/", async (_, res) => {
  try {
    const projects = await ProjectModel.find();

    res.status(200).json({ success: true, data: projects, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
});

projectsRoute.get("/query", async (req, res) => {
  try {
    const { tech } = req.query;

    if (tech) {
      const projects = await ProjectModel.find({ "tech.techList": tech });
      res.status(200).json({ success: true, data: projects, error: null });
    } else {
      res
        .status(406)
        .json({ success: false, data: null, error: "Error: bad parameters" });
    }
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
});

projectsRoute.post("/", async (req, res) => {
  try {
    const project = new ProjectModel(req.body);

    await project.save();

    res.status(200).json({ success: true, data: [project], error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
});

module.exports = { projectsRoute };
