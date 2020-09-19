const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  duration: { type: Number, required: true },
  weight: { type: Number },
  reps: { type: Number },
  sets: { type: Number },
  distance: { type: Number}
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);
module.exports = Exercise;