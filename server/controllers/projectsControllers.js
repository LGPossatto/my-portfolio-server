const { checkAuth } = require("../utils");
const { ProjectModel } = require("../models/projectModel");

const readProjects = async (_, res) => {
  try {
    const projects = await ProjectModel.find();

    res.status(200).json({ success: true, data: projects, error: null });
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

// const readProjectByTech = async (req, res) => {
//   try {
//     const { tech } = req.query;
//
//     if (tech) {
//       const projects = await ProjectModel.find({ "tech.techList": tech });
//       res.status(200).json({ success: true, data: projects, error: null });
//     } else {
//       res
//         .status(406)
//         .json({ success: false, data: null, error: "Error: bad parameters" });
//     }
//   } catch (err) {
//     res.status(400).json({ success: false, data: null, error: err.message });
//   }
// }

const createProject = async (req, res) => {
  try {
    if (checkAuth(req.headers.authorization || "Not authorized")) {
      const project = new ProjectModel(req.body);

      await project.save();

      res.status(200).json({ success: true, data: [project], error: null });
    } else {
      throw new Error("Not authorized");
    }
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

const updateProjectById = async (req, res) => {
  try {
    if (checkAuth(req.headers.authorization || "Not authorized")) {
      const updateRes = await ProjectModel.updateOne(
        { _id: req.params.id },
        req.body
      );

      if (updateRes.nModified < 1) {
        throw new Error("Project not found");
      }

      res.status(200).json({ success: true, data: null, error: null });
    } else {
      throw new Error("Not authorized");
    }
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

const deleteProjectById = async (req, res) => {
  try {
    if (checkAuth(req.headers.authorization || "Not authorized")) {
      const deleteRes = await ProjectModel.deleteOne({ _id: req.params.id });

      if (deleteRes.deletedCount < 1) {
        throw new Error("Project not found");
      }

      res.status(200).json({ success: true, data: null, error: null });
    } else {
      throw new Error("Not authorized");
    }
  } catch (err) {
    res.status(400).json({ success: false, data: null, error: err.message });
  }
};

module.exports = {
  readProjects,
  createProject,
  updateProjectById,
  deleteProjectById,
};
