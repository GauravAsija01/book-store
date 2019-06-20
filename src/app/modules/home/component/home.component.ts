import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //public imgURL = "https://cdn.jsdelivr.net/gh/GauravAsija01/book-store@master/src/asset/"
  public imgURL = "assets/";

  constructor() { }

  ngOnInit() {
  }

}
