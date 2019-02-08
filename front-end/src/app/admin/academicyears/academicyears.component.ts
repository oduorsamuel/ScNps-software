import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-academicyears',
  templateUrl: './academicyears.component.html',
  styleUrls: ['./academicyears.component.css']
})
export class AcademicyearsComponent implements OnInit {

  constructor(private adminservice:AdminService) { }

  ngOnInit() {
    return this.adminservice.getAcademicYears().subscribe((result)=>{
      console.log(result);
    })
  }

}
