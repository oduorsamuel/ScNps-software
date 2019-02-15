import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import * as Survey from 'survey-angular';
import * as widgets from 'surveyjs-widgets';
import {Router} from '@angular/router';

import 'inputmask/dist/inputmask/phone-codes/phone.js';

widgets.icheck(Survey);
widgets.select2(Survey);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey);
widgets.jqueryuidatepicker(Survey);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey);
widgets.bootstrapslider(Survey);
widgets.prettycheckbox(Survey);

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'staff',
  template: `<div class='survey-container contentcontainer codecontainer'><div id='surveyElement'></div></div>`
})
export class StudentresponseComponent implements OnInit {
  constructor(private router:Router){

  }
  @Output() submitSurvey = new EventEmitter<any>();

  @Input()
  json: object;


  click(result) {
    console.log(result);

  }

  ngOnInit() {
    const surveyModel = new Survey.Model(this.json);
    surveyModel.onComplete
      .add(result =>
        // this.submitSurvey.emit(result.data)
        this.router.navigate(['/thankYou'])
      );
    Survey.SurveyNG.render('surveyElement', { model: surveyModel });
    
  }
}
