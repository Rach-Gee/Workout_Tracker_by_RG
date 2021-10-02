const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    required: "Enter a type of workout"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for your workout"
  },
  duration: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  distance: {
    type: Number, 
  },
});

const workoutSchema = new Schema({
  day: {
      type: Date,
      required: "Enter a day for workout",
      default: Date.now,
  },
  exercises: {
      type: [exerciseSchema],
      
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;