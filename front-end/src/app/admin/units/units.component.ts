import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import {response} from '../../response.model';


@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {
  public units;
  constructor(private adminservice:AdminService) { }

  ngOnInit() {
    return this.adminservice.getUnits().subscribe((result)=>{
      this.units=result;
      console.log(this.units)
    })
  }

}
