import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loan } from './loan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  baseUrl:string = "http://localhost:8081/loans";

  constructor(private http: HttpClient){ }

  getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.baseUrl);
    }

  createLoan(userObj:any): Observable<any>{
    return this.http.post(this.baseUrl, userObj);
    }

  editLoan(id:string, userObj:any): Observable<Loan[]>{
    return this.http.put<any>(this.baseUrl+'/'+id, userObj);
  }
  
  deleteLoan(id:string): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  getLoanByName(firstNm: string): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.baseUrl+'ByName/'+firstNm);
  }

  // getLoanById(id: string): Observable<Loan[]> {
  //   return this.http.get<Loan[]>(this.baseUrl+'ById/'+id);
  // }
}
