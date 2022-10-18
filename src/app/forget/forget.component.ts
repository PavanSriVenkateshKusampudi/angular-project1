import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  public loginForm ! : FormGroup

  constructor(private formBuilder : FormBuilder,private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
  }
  login(){
    this.router.navigate(['dashboard'])

  }


}
