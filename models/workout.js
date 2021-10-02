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


