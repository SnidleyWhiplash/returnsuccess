import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { User } from './tracker';

@Injectable()
export class TrackerService {

  apiRoot = "//localhost:8081";
  me: User;

  constructor(private http: Http, private router: Router) { }

  login(name: string, password: string) {
    this.http.post(this.apiRoot + "/tracker/entry/user", {name, password}).subscribe(
      data => {
        this.me = data.json();
        this.http.get(this.apiRoot + "/tracker/exercises").subscribe( data => {
          this.me.exercises = data.json();
        });
        this.router.navigate(['/tracker']);
      },
      err => {
        console.log(err);
      },
      () => {}
    )
  }
  
}
