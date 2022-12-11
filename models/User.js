const mongoose = require("mongoose");

const ShotSchema = new mongoose.Schema({
  name: String,
  scene: String,
  dayNight: String,
  interiorExterior: String,
  Characters: String,
});

const ProjectSchema = new mongoose.Schema({
  name: String,

  shotlist: [ShotSchema],
});

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please add a username"],
    unique: true,
    trim: true,
    maxlength: [24, "Username must have a maximum of 24 characters"],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must have a minimum of 8 characters"],
  },
  projects: [ProjectSchema],
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
