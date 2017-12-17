const exercises = require("./exercises");

let exerciseIndex = 0;

const tracker = {
    exercises: exercises,
    getNextExercise: ()=> tracker.exercises[exerciseIndex++],
    entry: {
        name: "",
        exercises: []
    }
}

module.exports = tracker;