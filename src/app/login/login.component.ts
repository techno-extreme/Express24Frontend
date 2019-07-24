import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor() { }

  ngOnInit() {
  }

  loginClicked(){
    console.log("app.component.html");
    location.href = "app.component.html";
  }
}