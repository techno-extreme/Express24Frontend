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

  setDiv = function(tab: string){
    if(tab == 'consultations'){
      this.consultations = true;
      this.patients = false;
    }
    if(tab == 'patients'){
      this.consultations = false;
      this.patients = true;
    }
  }
}
