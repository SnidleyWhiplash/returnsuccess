import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrackerService } from '../models/tracker.service';
import { User } from '../models/tracker';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string;
  password: string;

  constructor(private tracker: TrackerService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.tracker.login(this.name, this.password);
  }
  loginFB() {
    this.tracker.loginFB();
  }
}
