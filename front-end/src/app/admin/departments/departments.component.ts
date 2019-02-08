import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service'

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor(private adminservice:AdminService) { }

  ngOnInit() {
    return this.adminservice.getDepartment().subscribe((result)=>{
      console.log(result)
    })
  }

}
