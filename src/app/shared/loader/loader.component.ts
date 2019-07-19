import { Component, OnInit } from '@angular/core';
import { LoaderService } from './../../services/loader.service';

@Component({
  selector: 'app-root-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(private loaderservice: LoaderService) { }

  ngOnInit() {


  }

}
