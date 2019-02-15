import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent{
  json = {
    // "title": "School of Computing Net Promoter Score",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "barrating",
        isRequired: true,
        "name": "Rate how much this unit is beneficial to your future career",
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
          "value": 1,
          "text": "Strongly Disagree"
         },
         {
          "value": 2,
          "text": "Disagree"
         },
         {
          "value": 3,
          "text": "Neutral"
         },
         {
          "value": 4,
          "text": "Agree"
         },
         {
          "value": 5,
          "text": "Strongly Agree"
         }
        ],
        "rows": [
         {
          "value": "affordable",
          "text": "The course outline was adhered to"
         },
         {
          "value": "Attendance",
          "text": "All sheduled classes were administered for this particular unit"
         },
         {
          "value": "better then others",
          "text": "Question not Availlable"
         },
         {
          "value": "easy to use",
          "text": "Question not Available"
         }
        ]
       }
      ]
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "radiogroup",
        "name": "price to competitors",
        isRequired: true,
        "title": "Compared to other Units, do you feel this unit is",
        "choices": [
         "Beneficial",
         "Best",
         "Worse",
         "Not sure"
        ]
       }
      ]
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "rating",
        isRequired: true,
        "name": "question2",
        "title": "question last",
        "rateMax": 9
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
