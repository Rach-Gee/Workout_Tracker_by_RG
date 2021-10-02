const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([{
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

router.put('/api/workouts/:id', function(req, res){
    Workout.findByIdAndUpdate(req.params.id, {
        "$push": {
            "exercises": req.body
        }
    }, {new: true})
    .then((updated) => {
        res.json(updated);
    })

});

router.post('/api/workouts/', function(req, res){
    Workout.create({})
    .then((created) => {
        res.json(created);
    })
});

module.exports = router;

module.exports = router;

