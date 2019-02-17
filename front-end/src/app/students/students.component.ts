import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin/admin.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{
  constructor(private adminservice:AdminService){}
  ngOnInit(){}
  getDepartments(){
    return this.adminservice.getDepartment().subscribe((results)=>{
      console.log(results)
      var cord=results;
      var departments={
       departmentid:[],
       departmentName:[],
      }
      for(var i = 0; i < cord.length; i++) {
      var obj = cord[i];
      if(obj.departmentId){
        departments.departmentid.push(obj.departmentId)
          }
          if(obj.departmentName){
          departments.departmentName.push(obj.departmentName)
          }
      }
      console.log(departments);
    })
  }
  json = {
    // "title": "School of Computing Net Promoter Score",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "barrating",
        "title":"Considering both the limitations and possibilities of the subject matter and the course, how would you rate the overall effectiveness of this unit?",
        isRequired: true,
        "name":"Unit General" ,
        "choices": [
         1,
         2,
         3,
         4,
         5,
         6,
         7,
         8,
         9,
         10,
        ]
       },
       {
        "type": "barrating",
        "title":"How would you rate the overall effectiveness of the instructor’s teaching?",
        isRequired: true,
        "name": "instructor",
        "choices": [
         1,
         2,
         3,
         4,
         5,
         6,
         7,
         8,
         9,
         10,
        ]
       },
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "matrix",
        isRequired: true,
        "name": "Quality",
        "title": "Please indicate if you agree or disagree with the following statements",
        "columns": [
         {
          "value": 2,
          "text": "Strongly Disagree"
         },
         {
          "value": 4,
          "text": "Disagree"
         },
         {
          "value": 6,
          "text": "Neutral"
         },
         {
          "value": 7,
          "text": "Agree"
         },
         {
          "value": 10,
          "text": "Strongly Agree"
         }
        ],
        "rows": [
         {
          "value": "clarity",
          "text": "The instructor clearly presented the skills to be learned"
         },
         {
          "value": "understanding",
          "text": "The instructor increased my understanding of course material"
         },
         {
          "value": "attendance",
          "text": "The instructor  was readily available during the class"
         },
         {
          "value": "participation",
          "text": "The instructor encouraged student contributions"
         }
        ]
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "barrating",
        "title":"How would you rate the overall effectiveness of lab Equipments when this particular unit was being administered (optional)?",
        "name":"lab" ,
        "choices": [
         1,
         2,
         3,
         4,
         5,
         6,
         7,
         8,
         9,
         10,
        ]
       },
       {
        "type": "barrating",
        "title":"How would you rate the classroom facilities provided by the school as per this unit?",
        isRequired: true,
        "name": "classroom",
        "choices": [
         1,
         2,
         3,
         4,
         5,
         6,
         7,
         8,
         9,
         10,
        ]
       },
      ]
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "rating",
        isRequired: true,
        "name": "school",
        "title": "Considering your complete experience with the school of computing and informatics, how likely would you be to recommend us to a friend or colleague?",
        "rateMax": 10
       }
      ]
     }
    ],
    "showProgressBar": "top"
   };

  onSurveySaved(survey) {
    this.json = survey;
  }

  sendData(result) {
    //TODO update with your own behavior    
    console.log(result);
  }

}
