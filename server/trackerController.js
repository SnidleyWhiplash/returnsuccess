const express = require("express");
const tracker = require("./trackerObject");

const router = express.Router();

router
    .get("/exercise", (req, res) => res.send(tracker.getNextExercise()))
    .get("/exercises", (req, res) => res.send(Array(8).fill().map( () => tracker.getNextExercise() )))
    .get("/entry/exercises", (req, res) => res.send(tracker.entry.exercises))
    .post("/entry/exercises", (req, res) => {
        tracker.entry.exercises.push(req.body);
    })
module.exports.router = router;