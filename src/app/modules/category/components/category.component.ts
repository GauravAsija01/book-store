import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public imgURL = "assets/";
  categoriesProd: any[] = [];

  constructor(private categoryservice: CategoryService) { }

  ngOnInit() {
    this.loadAllCategoryProd();

  }

  loadAllCategoryProd(){
    this.categoryservice.getAllCategoryProd().subscribe((data:any[]) => {
      this.categoriesProd = data;
    },(err) => {
      console.log(err);
    });
  }



}
