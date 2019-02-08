import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';



import { AppComponent } from './app.component';
import {StaffresponseComponent} from './staffresponse.component'
import {StudentresponseComponent} from './studentresponse.component'
import { StaffComponent } from './staff/staff.component';
import {StudentsComponent} from './students/students.component';
import { UpdateComponent } from './admin/update/update.component';
import {AdminService} from './admin/admin.service';
import {SurveyService} from './survey.service'
import { UnitsComponent } from './admin/units/units.component';
import { DepartmentsComponent } from './admin/departments/departments.component';
import { AcademicyearsComponent } from './admin/academicyears/academicyears.component';
import { ProgramsComponent } from './admin/programs/programs.component';
import { LoginComponent } from './admin/login/login.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
 const routes: Routes=[
  {path:'staff', component:StaffComponent},
  {path:'login', component:LoginComponent},
  {path:'units', component:UnitsComponent},
  {path:'departments', component:DepartmentsComponent},
  {path:'programs', component:ProgramsComponent},
  {path:'academicYears', component:AcademicyearsComponent},
  {path:'update', component:UpdateComponent},
  {path:'student', component:StudentsComponent},
  {path:'', redirectTo:'staff', pathMatch:'full'}
 ]

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    StaffresponseComponent,
    StudentresponseComponent,
    StudentsComponent,
    UpdateComponent,
    UnitsComponent,
    DepartmentsComponent,
    AcademicyearsComponent,
    ProgramsComponent,
    LoginComponent,
    NavbarComponent
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
