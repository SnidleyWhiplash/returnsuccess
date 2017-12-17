import * as $ from 'jquery';

export class Exercise {
    name: string;
}

export class User {
    name: string = "Firstname Lastname";
    exercises: Exercise[] = [];

    drawExercises() {
        $("#exercise-list").html(
            this.exercises.map(x=> `<li class="list-group-item">${x.name}</li>`).join("")
        );
    }

    init() {
        return $.when(
            $.getJSON("/tracker/exercises").done( data => {
                this.exercises = data;
                this.drawExercises();
            })
        );
    }
}

export class Entry {
    user: User[] = [new User()];
    exercises: Exercise[] = [];

    logExercise() {
        $("#my-exercise-log").html(
            this.exercises.map(x=> `<li class="list-group-item">${x.name}</li>`).join("")
        );
    }
    showUser() {
        $("#tracker-title").html(
            this.user.map(
                x=> `Add an Exercise to Your Tracker <span class="right">${x.name}</span>`).join("")
        );
    }

    update() {
        $.getJSON("/tracker/entry/exercises").done( data=>{
            this.exercises = data;
            this.logExercise();
        });
    }

    init() {
        setInterval(()=> this.update(), 1000);
    }
}

// export class Tracker {
//     user: User[] = [];
//     exercises: Exercise[] = [];

//     init() {
//         return $.when(
//             $.getJSON("/tracker/exercises").done( data => {
//                 this.exercises = data;
//             })
//         );
//     }

// }

//const tracker = new Tracker();
const entry = new Entry();
const me = new User();

me.init();
entry.init();
entry.showUser();

// tracker.init().done(()=>{
//     entry.logExercise();
//     entry.showUser();

//     me.exercises = tracker.exercises;
//     me.drawExercises();
// });

$("#exercise-list").click("li", function(e) {
    e.preventDefault();
    const $li = $(e.originalEvent.srcElement);
    const data = { name: $li.text() };
    $.post("/tracker/entry/exercises", data);
})

$("#my-exercise-log").click("li", function(e) {
    console.log("clicked to delete");
    e.preventDefault();
    const $li = $(e.originalEvent.srcElement);
    const data = { name: $li.text() };
    //$.get("/tracker/entry/exercises", data);
    $li.remove();
})
