import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedinDiv = false;

  public imgURL = "assets/";

  constructor() { }

  ngOnInit() {
    this.loggedin();
  }


  loggedin(){
    const result = localStorage.getItem('admin');
    //console.log(result);
    if(result){
      this.loggedinDiv = true;
    }
  }

  logout(){
    //localStorage.clear();
    localStorage.removeItem('admin');
    console.log("Local storage Clear");
    window.location.reload();

  }

}
