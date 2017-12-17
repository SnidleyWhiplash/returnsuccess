const exercises = require("./exercises");

const tracker = {
    exercises: exercises,
    entry: {
        name: "",
        exercises: []
    }
}

module.exports = tracker;