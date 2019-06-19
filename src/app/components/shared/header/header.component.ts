import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //public imgURL = "https://cdn.jsdelivr.net/gh/GauravAsija01/book-store@master/src/asset/"
  public imgURL = "assets/";

  constructor() { }

  ngOnInit() {
  }

}
