import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {
  url="http://localhost:3000/Responses";
  constructor(private http:Http) { }

  getUnits(): Observable<any> {
    return this.http.get(`${this.url}/units`).map(result => result.json());
    }
  
  getDepartment(): Observable<any> {
  return this.http.get((`${this.url}/departments`)).map(result=>result.json());
  }

  getPrograms():Observable<any>{
    return this.http.get((`${this.url}/programs`)).map(result=>result.json());
  }
  getAcademicYears():Observable<any>{
    return  this.http.get((`${this.url}/academicyears`)).map(result=>result.json());
  }

}
