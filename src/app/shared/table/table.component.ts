import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { PaginationService } from '../../services/pagination.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {
  headings: any[] = []
  @Input() mapper: any;
  @Output() result = new EventEmitter<any>();
  @Input() input: any;
  @Input() toggle: boolean;
  @Output() mini = new EventEmitter<boolean>();
  @Input() showEdit = Boolean;
  @Input() showDelete = Boolean;
  small: boolean;
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  constructor(private pagination: PaginationService) { }

  ngOnChanges() {
    this.small = this.toggle;
    for (var key in this.input) {
      if (!this.input.hasOwnProperty(key)) continue;
      this.headings = [];
      for (var prop in this.mapper) {
        if (!this.mapper.hasOwnProperty(prop)) continue;
        let sourceName = 'name'
        if (this.mapper[prop].sourceName)
          sourceName = this.mapper[prop].sourceName
        this.headings.push({
          value: this.mapper[prop].display,
          key: prop,
          visible: this.mapper[prop].visible,
          type: this.mapper[prop].type,
          source: this.mapper[prop].source,
          sourceName: sourceName
        });
      }
      break;
    }
    this.setPage(1);
  }

  setPage(page: number) {
    // get pager object from service
    if (this.input) {
      this.pager = this.pagination.getPager(this.input.length, page);
      // get current page of items
      this.pagedItems = this.input.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

  }

  edit(data) {
    this.small = true;
    this.result.emit(data);
    this.mini.emit(true);
  }

  delete(data) {
    this.result.emit(data);
  }

}
