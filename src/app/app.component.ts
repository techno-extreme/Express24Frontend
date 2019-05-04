import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Express24FrontEnd';
  patients = true;
  consultations = false;

  constructor(){
    this.patients = true;
  }

  setDiv = function(name: string){
    alert('in setDiv');
    name = "true";
  }
}
