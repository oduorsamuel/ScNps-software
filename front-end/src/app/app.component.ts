import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  json = {
    "title": "School of Computing Net Promoter Score",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "barrating",
        "name": "barrating",
        "choices": [
         1,
         2,
         3,
         4,
         5,
         {
          "value": "item1",
          "text": "6"
         },
         {
          "value": "item2",
          "text": "7"
         },
         {
          "value": "item3",
          "text": "8"
         },
         {
          "value": "item4",
          "text": "9"
         },
         {
          "value": "item5",
          "text": "10"
         }
        ]
       },
       {
        "type": "dropdown",
        "name": "countries",
        "title": "Please select the country you have arrived from:",
        "choicesByUrl": {
         "url": "https://restcountries.eu/rest/v1/all"
        },
        "renderAs": "select2"
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "matrix",
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
          "text": "Product is affordable"
         },
         {
          "value": "does what it claims",
          "text": "Product does what it claims"
         },
         {
          "value": "better then others",
          "text": "Product is better than other products on the market"
         },
         {
          "value": "easy to use",
          "text": "Product is easy to use"
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
        "title": "Compared to our competitors, do you feel the Product is",
        "choices": [
         "Less expensive",
         "Priced about the same",
         "More expensive",
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
