const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Must include an exercise type"
        },
        name: {
          type: String,
          trim: true,
          required: "Must include an exercise name"
        },
        duration: {
          type: Number,
          required: "Exercise must have a"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  }
);

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;