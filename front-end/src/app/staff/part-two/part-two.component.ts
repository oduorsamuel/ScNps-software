import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../admin/admin.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-part-two',
  templateUrl: './part-two.component.html',
  styleUrls: ['./part-two.component.css']
})
export class PartTwoComponent implements OnInit {
  public units;
  constructor(private adminservice:AdminService, private router:Router) { }

  ngOnInit() {
    return this.adminservice.getUnits().subscribe((results)=>{
      this.units=results;
      console.log(this.units);
    })
  }
  partTwo(){
      this.router.navigate(['/landingPage'])
  }
}
