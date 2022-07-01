import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  constructor(
    private auth: AuthService,
  ){
    auth.getUser().subscribe(
      (user)=>{
        console.log("app component worked!");
      },
      (err)=>{
        console.log(err);
      }
    )
  }
}
