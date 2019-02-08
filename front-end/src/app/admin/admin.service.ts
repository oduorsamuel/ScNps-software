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

}
