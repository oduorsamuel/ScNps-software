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
  private programs:Attributes[]=[];
  model = {unitCode:'',unitName:'',programId:''};
  constructor(private adminservice:AdminService, private router:Router) { }

  ngOnInit() {
   
    this.getUnits();
    this.getPrograms();
  }
  getUnits(){
    return this.adminservice.getUnits().subscribe((result)=>{
      this.units=result;
      console.log(this.units)
    })
  }
  getPrograms(){
    return this.adminservice.getPrograms().subscribe((programs)=>{
      this.programs=programs;
      console.log(programs)
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
deleteUnit(item:Attributes){

  this.adminservice.deleteUnit(item).subscribe(

    (data:any)=>{
      if(data.affectedRows==1)
      {
        this.programs.splice(this.programs.indexOf(item),1);
      }
      else
      {
        alert("Error Deleting");
      }
    }

  );
 
}

}