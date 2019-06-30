import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat-list-detail',
  templateUrl: './cat-list-detail.component.html',
  styleUrls: ['./cat-list-detail.component.css']
})
export class CatListDetailComponent implements OnInit {

  public imgURL = "assets/";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(param => {
      console.log('in subscribe', param);
    });
  }

}
