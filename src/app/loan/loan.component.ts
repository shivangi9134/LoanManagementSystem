import { Component, OnInit } from '@angular/core';
import { Loan } from '../loan';
import { LoanService } from '../loan.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  id:string;
  firstname: string;
  lastname: string;
  loan_amount: string;
  property_address: string;
  loan_term: string;
  loan_type: string;
  loans: Loan[];
  addLoanForm: any;
  email='';
  title:string;
  formValue!:FormGroup;
  loandata:Loan=new Loan();
  disabledValue = false;
  firstNm:string;

  constructor(private loanService: LoanService, private route: ActivatedRoute, private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
       firstname:['',Validators.required],
       lastname:[''],
       loan_amount:['',Validators.required],
       property_address:[''],
       loan_term:[''],
       loan_type:['']
     })
    this.getLoans();
    this.title = JSON.parse(localStorage.getItem("token") || '{}');
    console.log(this.title.substring(0, 5));
    if( this.title.substring(0, 5) == "admin"){
      this.disabledValue = false;
    }
    else{
      this.disabledValue = true;
    }
  }
  
  getLoans() {
    this.loanService.getLoans().subscribe((data: Loan[]) => {
      console.log(data);
      this.loans = data;
    });
  }

  getLoanByName(firstNm:string) {
    this.loanService.getLoanByName(firstNm).subscribe((data: Loan[]) => {
      console.log(data);
      this.loans = data;
    });
  }

  createLoan() {
    this.loandata.firstname=this.formValue.value.firstname;
    this.loandata.lastname=this.formValue.value.lastname;
    this.loandata.loan_amount=this.formValue.value.loan_amount;
    this.loandata.property_address=this.formValue.value.property_address;
    this.loandata.loan_term=this.formValue.value.loan_term;
    this.loandata.loan_type=this.formValue.value.loan_type;
    // const loandata = {
    //   firstname : "shivangi",
    //   lastname : "gupta",
    //   loan_amount: "1212",
    //   property_address : "jfgddf",
    //   loan_term : "wkjgwd",
    //   loan_type : "lkds"
    // }
    console.log(this.loandata);
    this.loanService.createLoan(this.loandata).subscribe((data: Loan[]) => {
      console.log("User Created");
      this.getLoans();
      console.log(data);
    }, err => {
      console.log("User Creation error");
      console.log(err);
    });
  }

  editLoan(loans: any){
    debugger;
    this.loans.forEach(element => {
      element.isEdit = false; //to delete only one record at a time and not mutiple
    })
    loans.isEdit = true;
  }

  deleteLoan(j:string){
    console.log(j);
    this.loanService.deleteLoan(j).subscribe(data => {
      console.log("User Deleted Successfully");
      this.getLoans();
    })
  }

}
