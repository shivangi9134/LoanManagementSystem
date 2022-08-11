import { NgModule } from '@angular/core';
import { LoanComponent } from './loan/loan.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  { path : '', component : LoginComponent},
  { path : 'loan', component : LoanComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
