const express = require("express");
const tracker = require("./trackerObject");

const router = express.Router();

router
    .get("/exercises", (req, res) => res.send(tracker.exercises))
    //.get("/exercise", (req, res) => res.send(tracker.getNextExercise()))
    //.get("/exercises", (req, res) => res.send(Array(8).fill().map( () => tracker.getNextExercise() )))
    .get("/entry/exercises", (req, res) => res.send(tracker.entry.exercises))
    .post("/entry/exercises", (req, res) => {
        tracker.entry.exercises.push(req.body);
        res.status(201).send(tracker.entry.exercises);
    })
module.exports.router = router;