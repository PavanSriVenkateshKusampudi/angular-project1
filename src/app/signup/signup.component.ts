import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder, Validators}from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm ! : FormGroup;
  loginForm: any;

  constructor( private formBuilder :FormBuilder, private http : HttpClient, private router:Router) { 
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    });
  
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name:[''],
      email:[''],
      password:['']
    })
  }
  signUp(){  
    
    this.router.navigate(['login']);

  }
  login(){
    alert(this.loginForm.value.email);

  }
 
}
