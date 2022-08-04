import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import {Loan} from '../loan';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  construtor(private loanService: LoanService){}

  ngOnInit(): void {
    
this.loanService.getLoans().subscribe((data: Loan[]) => {
  console.log(data);
  this.loans = data;
  });
  }

}
