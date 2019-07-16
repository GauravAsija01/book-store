//https://stackoverflow.com/questions/52725392/angular-6-checkbox-filter

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  filter = { mens: true, womens: true, kids: true };
  products = [
    {
      'bikeId': 6,
      'bikeName': 'Kids blue bike',
      'bikeCode': 'KB-3075',
      'releaseDate': 'June 28, 2016',
      'description': 'Kids blue bike with stabalizers',
      'category': 'kids',
      'price': 290.00,
      'starRating': 4.8,
      'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/1772/bike-kid.png'
    }
  ]
  filteredProducts = [];

  filterChange() {
    this.filteredProducts = this.products.filter(x =>
       (x.category === 'kids' && this.filter.kids)
       || (x.category === 'mens' && this.filter.mens)
       || (x.category === 'womens' && this.filter.womens)
    );
  }

}
