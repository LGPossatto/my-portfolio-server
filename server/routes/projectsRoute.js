const express = require("express");
const {
  readProjects,
  createProject,
  updateProjectById,
  deleteProjectById,
} = require("../controllers/projectsControllers");

const projectsRoute = express.Router();

projectsRoute.get("/", readProjects);

// projectsRoute.get("/query", readProjectByTech);

projectsRoute.post("/", createProject);

projectsRoute.put("/:id", updateProjectById);

projectsRoute.delete("/:id", deleteProjectById);

module.exports = { projectsRoute };
