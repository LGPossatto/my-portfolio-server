const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, dropDups: true },
    desc: { type: String, required: true },
    git_url: { type: String, required: true },
    site_url: { type: String, required: true },
    tech: {
      stack: { type: String, required: true },
      tech_list: { type: [String], required: true },
    },
  },
  { timestamps: true }
);

const ProjectModel = mongoose.model("project", projectSchema);

module.exports = { ProjectModel };
