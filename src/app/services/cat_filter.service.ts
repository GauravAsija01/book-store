import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Cat_FilterService {

  FilterSubject = new Subject();

  constructor() { }

  getFilter(){
    return this.FilterSubject;
  }

  setFilter(data:any){
    this.FilterSubject.next(data);
  }


}
