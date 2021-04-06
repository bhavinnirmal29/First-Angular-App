import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
  http:HttpClient;
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };
  constructor(http:HttpClient) { 
    this.http = http;
  }
  CallEmpInfo():Observable<string[]>
  {
    return this.http.get<string[]>('./assets/External/emp.json');
  }
}
