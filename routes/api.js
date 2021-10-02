const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([{
            "$addFields": {
                "totalDuration": {
                    "$sum": "$exercises.duration"
                }
            }
    }]).then((result) => {
        console.log(result);
        res.json(result)
    })
});

module.exports = router;

