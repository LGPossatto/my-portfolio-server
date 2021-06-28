const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String, required: true },
    git_url: { type: String, required: true },
    site_url: { type: String, required: true },
    tech: {
      stack: { type: String, required: true },
      techList: { type: [String], required: true },
      primaryTech: { type: String, required: true },
      secondaryTech: { type: String, required: false },
    },
  },
  { timestamps: true }
);

const ProjectModel = mongoose.model("project", projectSchema);

module.exports = { ProjectModel };
