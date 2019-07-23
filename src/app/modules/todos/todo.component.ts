import { Component, OnInit } from '@angular/core';
import { TodoService } from './../../services/todo.service';
import {Todo} from '../../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  // {id: 1, taskName: "Hello 1", isCompleted: false},
  // {id: 2, taskName: "Hello 2", isCompleted: true}

  taskname = '';
  expanded = true;
  classAdd = false;
  iscompleted = false;
  //todos :any[] = [];
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    //console.log(this.todos);
    this.fetchAllRecords();
  }

// With Mongo DB function
  fetchAllRecords(){
    this.todoService.getTodoRecords().subscribe((data:any[]) => {
      this.todos = data;
      console.log(this.todos);
   },(err) => {
     console.log(err);
   });
  }

  addNewTodo(){
    console.log("New Added -- ", this.taskname);
    this.todoService.addTodoRecord(this.taskname);
      alert("Record Added Successfully");
      this.taskname = '';
      window.location.reload();
  }

  onDelete(id){
    
    
    if(confirm("Are you sure to delete Employee "+id)) {
      console.log(id + " Employee Record Deleted Successfully");
      this.todoService.deleteTodoRecord(id);
      console.log("Deleted -- ", id);
      window.location.reload();
    }
    
  }

  toggleTable(){
    console.log("Hide Show");
    this.expanded = !this.expanded;
    this.classAdd = !this.classAdd;
  }

  completedTask(){

  }




  
// With JSON sever function
// fetchAllRecords(){
//   this.todoService.getTodoRecords().subscribe((data:any[]) => {
//     this.todos = data;
//  },(err) => {
//    console.log(err);
//  });
// }
  // addNewTodo(data){
  //   console.log("New Added -- ", this.title);
  //   const newRecord = {
  //     id: '', taskName: this.title, isCompleted: false
  //   }
  //   this.todoService.addTodoRecord(newRecord).subscribe((data) => {
  //     this.todos.push(data);
  //     alert("Record Added Successfully");
  //     console.log(data, "Data");
  //     console.log(newRecord, "New Record");
  //     this.title = '';
  //   },(err)=> {
  //     console.log(err);
  //   });
  //   //this.todos.push({id: this.todos.length + 1,taskName: this.title, isCompleted: false});
  // }
  // onDelete(id){
  //   //this.todos.splice(i, 1);
  //   this.todoService.deleteTodoRecord(id).subscribe((data) => {
  //     this.todos = this.todos.filter(obj => obj.id !== id);
  //     alert("Record Deleted!");
  //     console.log(data, "Data");
  //   },(err)=> {
  //     console.log(err);
  //   });
  // }
}
