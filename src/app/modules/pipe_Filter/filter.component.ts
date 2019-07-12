// https://long2know.com/2017/04/angular-filter-checkboxes/
// https://www.freakyjolly.com/angular-4-5-typescript-create-filter-list-with-check-boxes-to-select-from-list/
// https://stackoverflow.com/questions/50075567/error-the-pipe-filter-could-not-be-found-while-using-angular4

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';



@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filterItems = [];

  constructor() { }

  ngOnInit() {
  }

  checked() {
    return this.filterItems.filter(item => { return item.checked; });
  }

}
