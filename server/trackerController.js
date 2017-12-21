const express = require("express");
const tracker = require("./trackerObject");

const router = express.Router();

router
    .get("/exercises", (req, res) => res.send(tracker.exercises))
    .get("/users", (req, res) => res.send(tracker.users))
    //.get("/exercise", (req, res) => res.send(tracker.getNextExercise()))
    //.get("/exercises", (req, res) => res.send(Array(8).fill().map( () => tracker.getNextExercise() )))
    .get("/entry/exercises", (req, res) => res.send(tracker.entry.exercises))
    .get("/entry/users", (req, res) => res.send(tracker.entry.users))
    .get("/entry/user", (req, res) => res.send(tracker.entry.user))
    .post("/entry/exercises", (req, res) => {
        tracker.entry.exercises.push(req.body);
        res.status(201).send(tracker.entry.exercises);
    })
    .post("/entry/user", (req, res) => {
        res.status(201).send(tracker.entry.user);
    })
    .post("/entry/users", (req, res) => {
        if (req.body.password == "password") {
            const user = { name: req.body.name};
            tracker.entry.users.push(user);
            res.status(201).send(user);
        } else {
            res.status(403).send("Invalid Password");
        }
    })
    .delete("/entry/exercises", (req, res) => {
        res.status(200).send(tracker.entry.exercises);
    })
module.exports.router = router;