// https://stackblitz.com/edit/angular-7-registration-login-example

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../models/user';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  submitted = false;

  // @Input() loginFlagInput;

  // @Output() loginFlagOutput = new EventEmitter();

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loginInt();
  }

  // togglecomp(){
  //   this.loginFlagOutput.emit(true);
  // }

  loginInt(){
    this.login = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  get form() { return this.login.controls; }

  loginSubmit(){
    this.submitted = true;
    console.log(this.login);
    //console.log(this.login.value);
    this.validateUSer();
  }

  validateUSer(){
    const emailInput = "gaurav.designer01@gmail.com";
    const pwd = "gaur1234";
    if(this.form.email.value == emailInput && this.form.password.value == pwd){
        console.log("LogIn");
        this.router.navigate(["/home"]);
    } else{
      console.log("ERROR");
      return false;
    }


  }



}
