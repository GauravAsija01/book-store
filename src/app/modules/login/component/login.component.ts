// https://stackblitz.com/edit/angular-7-registration-login-example

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './../../../services/login.service';


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

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private loginservice: LoginService) { }

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
    const emailInput = "admin";
    const pwd = "password";
    if(this.form.email.value == emailInput && this.form.password.value == pwd){
        console.log("LogIn");
        //const key = 'Item 1';
        localStorage.setItem(this.form.email.value, this.form.password.value);
        this.router.navigate(["/home"]);
    } else{
      console.log("ERROR");
      return false;
    }


  }



}
