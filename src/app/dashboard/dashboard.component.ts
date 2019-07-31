import { OnInit, Component, OnChanges, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ngOnInit() {
  }

  @Component({
    selector: 'patients',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
  })
  list: any;
  item: any;
  mini: boolean = false;

  ngOnChanges() {
  }

  toggle(close) {
    this.mini = close;
  }

  add() {
    this.mini = true;
    this.item = {
      id: 0,
      name: '',
      description: '',
      unitOfMeasureId: 0,
      quantity: 0,
      dateModified: '',
      dateCreated: ''
    }
  }
  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }

  submit(data) {
    switch (data.actionType) {
      
    }
  }

  edit(data) {
    this.item = data;
  }
}