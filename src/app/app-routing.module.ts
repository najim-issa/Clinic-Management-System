import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { SignupComponent } from './signup/signup.component';
import { TryComponent } from './try/try.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { Table1Component } from './table1/table1.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'doctor', component: DoctorComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'userlogin', component: UserloginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'try', component: TryComponent},
  {path: 'patientDashboard', component: PatientDashboardComponent},
  {path: 'moreDetails', component: MoreDetailsComponent},
  {path: 'report1', component: Table1Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
