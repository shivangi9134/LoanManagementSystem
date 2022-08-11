import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email : string;
password : string;
name:any;
title:string;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private loanService: LoanService){}

  ngOnInit(){
  }

  moveToLoan() {
  this.title = this.email;
  localStorage.setItem("token", this.title);
  this.router.navigate(['/loan']);
  }
}
