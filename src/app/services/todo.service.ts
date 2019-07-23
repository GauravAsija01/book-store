import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Todo} from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  private getURL(url){
    return "http://localhost:4000/" + url;
  }

// With Mongo DB function
  getTodoRecords(){
     return this.http.get(this.getURL('todos'));
  }

  addTodoRecord(taskname){
    const obj = {
      taskname: taskname,
      iscompleted: false
    };
    console.log(taskname);
    return this.http.post(this.getURL('todos/add'), obj).subscribe((res) =>{
      console.log('Employee Added in database');
    });
  }

  deleteTodoRecord(id){
    return this.http.get(this.getURL('todos/delete/')+id).subscribe((res) =>{
      console.log('Todo Delete from database');
    });
  }







// With JSON sever function
//   getTodoRecords(){
//     return this.http.get(this.getURL('todos'));
//  }
//  addTodoRecord(body){
//    console.log(body);
//    return this.http.post(this.getURL('todos'), body);

//  }
//  deleteTodoRecord(id){
//    return this.http.delete(this.getURL('todos/')+id);
//  }

 


}
