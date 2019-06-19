import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //public imgURL = "https://cdn.jsdelivr.net/gh/GauravAsija01/book-store@master/src/asset/"
  public imgURL = "assets/";

  constructor() { }

  ngOnInit() {
  }

}
