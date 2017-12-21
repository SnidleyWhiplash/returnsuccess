import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Exercise, User, Entry } from '../models/tracker';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {

  apiRoot = "//localhost:8081";
  entry = new Entry();
  me = new User();
  constructor(private http: Http) { }

  ngOnInit() {
      setInterval(()=> this.update(), 1000);
      this.http.get(this.apiRoot + "/tracker/exercises").subscribe( data => {
        this.me.exercises = data.json();
      })
  }

  update() {
    this.http.get(this.apiRoot + "/tracker/entry/exercises").subscribe( data => {
        this.entry.exercises = data.json();
    });
    this.http.get(this.apiRoot + "/tracker/entry/users").subscribe( data => {
      // const user = data.json();
      // this.entry.user = user;
      // this.entry.users.push(user);
      this.entry.users = data.json();
    });
  }

  addToEntry(e: MouseEvent, exercise: Exercise, i: number) {
    e.preventDefault();
    const data = { name: exercise.name };
    this.http.post(this.apiRoot + "/tracker/entry/exercises", data).subscribe(res=>{
      this.entry.exercises.push(res.json());
    })
  }

  removeExercise(ex: Exercise) {
    console.log("remove clicked");
    var index = this.entry.exercises.indexOf(ex, 0);
    console.log("index: " + index);
    if (index > -1) {
      var ex_name = this.entry.exercises[index].name;
      this.entry.exercises.splice(index, 1);
      this.http.delete(this.apiRoot + "/tracker/entry/exercises", ex_name).subscribe();
    }
  }


}
