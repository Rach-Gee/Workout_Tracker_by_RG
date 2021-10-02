const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for your workout"
  },
  description: {
    type: String,
    trim: true,
    required: "Enter a description for your workout"
  },
  date: {
    type: Date,
    default: Date.now
  },
  duration: {
    type: Number,
    required: "Enter a duration for your workout"
  },
  weight: {
    type: Number,
    required: "Enter how heavy are the weights are you working out with"
  },
  reps: {
    type: Number,
    required: "Enter the amount of reps you will complete"
  },
  sets: {
    type: Number,
    required: "Enter the amount of sets you will complete"
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;


