import { Cat_FilterService } from './../../../services/cat_filter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.component.html'
})
export class CategorySearchComponent implements OnInit {

  public imgURL = "assets/";

  constructor(private cat_filterservice: Cat_FilterService) { }

  ngOnInit() {

  }

  emitFilter(data){
    console.log(data);
    this.cat_filterservice.setFilter(data);
  }


}
