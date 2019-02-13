import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {Programs} from '../response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  public departments;
  model = {programId:'', programName:'',departmentId:''}
  constructor(private adminservice:AdminService, private router:Router) { }
  ngOnInit() {

    this.getDepartments();
    this.getPrograms();
  }
  getPrograms(){
      return this.adminservice.getPrograms().subscribe((result)=>{
      console.log(result);
    })
  }

  getDepartments(){
    return this.adminservice.getDepartment().subscribe((departments)=>{
       console.log(departments)
       this.departments=departments
    })
  }

  addProgram(){
    this.adminservice.addProgram(this.model).subscribe(
      (data:Programs)=>{
       if(data!=null)
       console.log(data);
       this.router.navigate(['/update']);
       },
       function (error){console.log("error"+error)},
       function(){console.log("subscription done")}
    );

}
}