import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveynavComponent } from './surveynav.component';

describe('SurveynavComponent', () => {
  let component: SurveynavComponent;
  let fixture: ComponentFixture<SurveynavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveynavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
