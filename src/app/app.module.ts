import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { TrackerComponent } from './tracker/tracker.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { TrackerService } from './models/tracker.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    TrackerComponent,
    IndexComponent,
    LoginComponent,
    MyaccountComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [ TrackerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
