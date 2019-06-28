import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  private getURL(url){
    return "http://localhost:3000/" + url;
  }


  getAllCategoryProd(){
    return this.http.get(this.getURL('category'));
  }
}
