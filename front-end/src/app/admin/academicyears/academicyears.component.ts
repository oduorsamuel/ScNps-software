import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {AcademicYears} from '../response'
import {Router} from '@angular/router'

@Component({
  selector: 'app-academicyears',
  templateUrl: './academicyears.component.html',
  styleUrls: ['./academicyears.component.css']
})
export class AcademicyearsComponent implements OnInit {
  model = {academicYear:''}

  constructor(private adminservice:AdminService, public router:Router) { }

  ngOnInit() {
    return this.adminservice.getAcademicYears().subscribe((result)=>{
      console.log(result);
    })
  }

  addAcademicYear(){
    this.adminservice.addAcademicYear(this.model).subscribe(
      (data:AcademicYears)=>{
       if(data!=null)
       this.router.navigate(['/update']);
       console.log(data)
       },
       function (error){console.log("error"+error)},
       function(){console.log("subscription done")}
    );
   
}

}
