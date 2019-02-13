import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {
  json = {
    // "title": "School Of Computing Net Promoter Score",
    "pages": [
     {
      "name": "page1",
      "elements": [
        {
          "type": "barrating",
          isRequired: true,
          "name": "Before Initiating this survey to students please rate the School",
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
        "type": "dropdown",
        "name": "department",
        isRequired: true,
        "title": "Select Department",
        "choicesByUrl": {
         "url": "http://localhost:3000/Responses/departments"
        },
        "renderAs": "select2"
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
        {
          "type": "dropdown",
          "name": "program",
          isRequired: true,
          "title": "Select Program",
          "choicesByUrl": {
           "url": "http://localhost:3000/Responses/programs"
          },
          "renderAs": "select2"
         }
        ]
       },
     {
      "name": "page3",
      "elements": [
        {
          "type": "dropdown",
          isRequired: true,
          "name": "academicYear",
          "title": "Select Academic Year",
          optionsCaption: "Select programName...",
          "choicesByUrl": {
           "url": "http://localhost:3000/Responses/academicYears"
          },
          "renderAs": "select2"
         }
        ]
       },
       {
        "name": "page4",
        "elements": [
          {
            "type": "dropdown",
            isRequired: true,
            "name": "yearOfStudy",
            "title": "Select Year Of Study",
            choices: [
               1,
               2,
               3,
               4,
             ],
            "renderAs": "select2"
           }
          ]
         },
         {
          "name": "page5",
          "elements": [
            {
              "type": "dropdown",
              "name": "semester",
              isRequired: true,
              "title": "Select Semester",
              "renderAs": "select2",
              choices: [
                1,
                2
               ]
             }
            ]
           },
     {
      "name": "page4",
      "elements": [
        {
          "type": "dropdown",
          isRequired: true,
          "name": "unit",
          "title": "Select Unit",
          "choicesByUrl": {
           "url": "http://localhost:3000/Responses/units"
          },
          "renderAs": "select2"
         }
        ]
       }
    ],
    "showProgressBar": "top"
   };
   constructor( private router:Router) { 

  }

  onSurveySaved(survey) {
    this.json = survey;
  
  }

  sendData(result) {
    //TODO update with your own behavior    
    console.log(result);
  }

}
