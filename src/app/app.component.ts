import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login/login.component.html',
  styleUrls: ['./login/login.component.scss']
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
      document.getElementById('consultations').setAttribute("class", "current_page_item");
      this.patients = false;
    }
    if(tab == 'patients'){
      document.getElementById('patients').setAttribute("class", "current_page_item");
      this.consultations = false;
      this.patients = true;
    }
  }
}
