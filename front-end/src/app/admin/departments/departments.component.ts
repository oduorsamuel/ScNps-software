import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service'
import {Departments} from '../response'
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  model={departmentId:'', departmentName:'',}
  constructor(private adminservice:AdminService, private router:Router) { }

  ngOnInit() {
    return this.adminservice.getDepartment().subscribe((result)=>{
      console.log(result)
    })
  }

  addDepartment(){
    this.adminservice.addDepartment(this.model).subscribe(
      (data:Departments)=>{
       if(data!=null)
       console.log(data);
       this.router.navigate(['/update']);
       },
       function (error){console.log("error"+error)},
       function(){console.log("subscription done")}
    );

}
}
