import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {

  constructor(private adminservice:AdminService) { }

  ngOnInit() {
    return this.adminservice.getPrograms().subscribe((result)=>{
      console.log(result);
    })
  }

}
