import { Component, OnInit } from '@angular/core';
import { Exercise, User, Entry } from '../models/tracker';

import * as $ from 'jquery';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {

  apiRoot = "//localhost:8081";
  entry = new Entry();
  me = new User();
  constructor() { }

  ngOnInit() {
      setInterval(()=> this.update(), 1000);
      $.getJSON(this.apiRoot + "/tracker/exercises").done( data => {
        this.me.exercises = data;
      })
  }

  update() {
    $.getJSON(this.apiRoot + "/tracker/entry/exercises").done( data=>{
        this.entry.exercises = data;
    });
  }

  addToEntry(e: MouseEvent, exercise: Exercise, i: number) {
    e.preventDefault();
    const data = { name: exercise.name };
    $.post(this.apiRoot + "/tracker/entry/exercises", data);
  }

}
