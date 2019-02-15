import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';



import { AppComponent } from './app.component';
import {StudentresponseComponent} from './studentresponse.component'
import {StudentsComponent} from './students/students.component';
import { UpdateComponent } from './admin/update/update.component';
import {AdminService} from './admin/admin.service';
import {SurveyService} from './survey.service'
import { UnitsComponent } from './admin/units/units.component';
import { DepartmentsComponent } from './admin/departments/departments.component';
import { ProgramsComponent } from './admin/programs/programs.component';
import { LoginComponent } from './admin/login/login.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { SurveynavComponent } from './surveynav/surveynav.component';
import { PartOneComponent } from './staff/part-one/part-one.component';
import { PartTwoComponent } from './staff/part-two/part-two.component';
import { LandingpageComponent } from './staff/landingpage/landingpage.component';
import { ThankyouComponent } from './staff/thankyou/thankyou.component';
 const routes: Routes=[
  {path:'landingPage', component:LandingpageComponent},
  {path:'thankYou', component:ThankyouComponent},
  {path:'staff', component:PartOneComponent},
  {path:'staffTwo', component:PartTwoComponent},
  {path:'login', component:LoginComponent},
  {path:'units', component:UnitsComponent},
  {path:'departments', component:DepartmentsComponent},
  {path:'programs', component:ProgramsComponent},
  {path:'update', component:UpdateComponent},
  {path:'student', component:StudentsComponent},
  {path:'', redirectTo:'staff', pathMatch:'full'}
 ]

@NgModule({
  declarations: [
    AppComponent,
    StudentresponseComponent,
    StudentsComponent,
    UpdateComponent,
    UnitsComponent,
    DepartmentsComponent,
    ProgramsComponent,
    LoginComponent,
    NavbarComponent,
    SurveynavComponent,
    PartOneComponent,
    PartTwoComponent,
    LandingpageComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AdminService,SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
