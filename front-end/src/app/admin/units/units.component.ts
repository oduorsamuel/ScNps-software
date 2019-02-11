import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import {response} from '../../response.model';
import {Router} from '@angular/router'


@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {
  public units;
  constructor(private adminservice:AdminService, private router:Router) { }

  ngOnInit() {
    return this.adminservice.getUnits().subscribe((result)=>{
      this.units=result;
      console.log(this.units)
    })
  }

  addUnit(unitCode,unitName){
    this.adminservice.addUnit(unitCode,unitName).subscribe(()=>{
       this.router.navigate(['/update']);
    });
  }
}