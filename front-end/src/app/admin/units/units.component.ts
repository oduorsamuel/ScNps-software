import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Attributes} from '../response';
import {Router} from '@angular/router'


@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {
  public units;
  model = {unitCode:'',unitName:''};
  constructor(private adminservice:AdminService, private router:Router) { }

  ngOnInit() {
    return this.adminservice.getUnits().subscribe((result)=>{
      this.units=result;
      console.log(this.units)
    })
  }

  addUnit(){
    this.adminservice.addUnit(this.model).subscribe(
      (data:Attributes)=>{
       if(data!=null)
       console.log(data);
       this.router.navigate(['/update']);
       },
       function (error){console.log("error"+error)},
       function(){console.log("subscription done")}
    );
   
}

}