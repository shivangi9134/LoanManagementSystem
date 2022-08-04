import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loan } from './loan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private baseUrl = "http://localhost:8080/api/loan";
  
  constructor(private http: HttpClient){
    getloan(): Observable<Loan[]> {
    return this.http.get<Loan[]>(`${this.baseUrl}`);
    }
  }
}
