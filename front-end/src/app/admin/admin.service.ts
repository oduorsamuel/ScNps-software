import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {Attributes,Departments,Programs,AcademicYears} from './response'
import { Http,Headers,Response,RequestOptions } from '@angular/http';

@Injectable()
export class AdminService {
  private programs:Attributes[]=[];
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

  addAcademicYear(item:AcademicYears){
    let body = JSON.stringify(item);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.url}/academicYear`,
                  body, options)
                 .map((response:Response)=>response.json());
}
  addProgram(item:Programs){
    let body = JSON.stringify(item);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.url}/program`,
                  body, options)
                 .map((response:Response)=>response.json());
}
  addDepartment(item:Departments){
    let body = JSON.stringify(item);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.url}/department`,
                  body, options)
                 .map((response:Response)=>response.json());
}


  addUnit(item:Attributes){
    let body = JSON.stringify(item);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.url}/unit`,
                  body, options)
                 .map((response:Response)=>response.json());
}
deleteUnit(unitCode) {
  return this.http.delete(`${this.url}/unit${unitCode}`)

}
deleteDepartment(departmentId){
  return this.http.delete(`${this.url}/department${departmentId}`)
}
deleteProgram(programId){
 return this.http.delete(`${this.url}/program${programId}`)
}

}
