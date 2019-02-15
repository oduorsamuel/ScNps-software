import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../admin/admin.service'
import { Router } from '@angular/router';
import {Programs,Departments} from '../survey'


@Component({
  selector: 'app-part-one',
  templateUrl: './part-one.component.html',
  styleUrls: ['./part-one.component.css']
})
export class PartOneComponent implements OnInit {
public departments;
public programs;
  constructor(private adminservice:AdminService, private router:Router) { }

  ngOnInit() {
    this.getDepartments();
    this.getPrograms();
  }
 getDepartments(){
 return this.adminservice.getDepartment().subscribe((results)=>{
   this.departments=results;
   console.log(results);
 })
 }
getPrograms(){
  return this.adminservice.getPrograms().subscribe((results)=>{
    this.programs=results;
    console.log(results);
  })
}

partOne(){
  this.router.navigate(['/staffTwo'])
}

}
