import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoanComponent } from './loan/loan.component';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoanComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
