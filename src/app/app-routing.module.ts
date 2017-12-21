import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { TrackerComponent } from './tracker/tracker.component';

const routes: Routes = [
    { path: 'tracker', component: TrackerComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: IndexComponent },
    { path: '', pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
