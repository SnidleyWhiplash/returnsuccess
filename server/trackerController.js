const express = require("express");
const tracker = require("./trackerObject");

const router = express.Router();

router
    .get("/exercises", (req, res) => res.send(tracker.exercises))
    .get("/entry/exercises", (req, res) => res.send(tracker.entry.exercises))
    .post("/entry/exercises", (req, res) => {
        tracker.entry.exercises.push(req.body);
    })
module.exports.router = router;