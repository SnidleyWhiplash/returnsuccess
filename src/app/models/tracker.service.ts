import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { User } from './tracker';

declare var window: any;
declare var FB: any;

@Injectable()
export class TrackerService {

  apiRoot = "//localhost:8081";
  me: User;

  constructor(private http: Http, private router: Router) { 
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '501672660207776',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.11'
      });
        
      FB.AppEvents.logPageView();   
        
    };
  
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = <HTMLScriptElement>d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

  loginFB() {
    FB.login((response: any) => {
        if (response.authResponse) {
         console.log(response);

         FB.api('/me?fields=name,email,picture', (response: any) => {
           console.log(response);
           this.login(response.name, 'password', response.id, response.picture.data.url);
         });

        } else {
         console.log('User cancelled login or did not fully authorize.');
        }
    }, { scopes: 'email,user_photos'});
  }

  login(name: string, password: string, fbid?: string, picture?: string) {
    this.http.post(this.apiRoot + "/tracker/entry/users", {name, password, fbid, picture }).subscribe( 
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
