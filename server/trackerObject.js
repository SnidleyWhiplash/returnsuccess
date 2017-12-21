const exercises = require("./exercises");

let exerciseIndex = 0;
let userIndex = 0;

const tracker = {
    users: [],
    getNextUser: () => tracker.users[userIndex++],
    exercises: exercises,
    getNextExercise: ()=> tracker.exercises[exerciseIndex++],
    entry: {
        user: "",
        exercises: [],
        users: []
    }
}

module.exports = tracker;