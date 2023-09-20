import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EducationComponent } from './cv-editor/education/education.component';
import { CvEditorComponent } from './cv-editor/cv-editor.component';
import { UserdataComponent } from './cv-editor/userdata/userdata.component';
import { ClousureComponent } from './cv-editor/clousure/clousure.component';
import { ExperienceComponent } from './cv-editor/experience/experience.component';
import { ForeignLComponent } from './cv-editor/foreign-languages/f-languages.component';
import { SoftwareComponent } from './cv-editor/software/software.component';
import { CertificatesComponent } from './cv-editor/certificate/certificate.component';
import { InterestComponent } from './cv-editor/interest/interest.component';
import { ProjectsComponent } from './cv-editor/projects/projects.component';
import { UserDescriptionComponent } from './cv-editor/user-description/user-description.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'edit/:cvname',component:CvEditorComponent,children:[
    {path:'education',component:EducationComponent},
    {path:'experience',component:ExperienceComponent},
    {path:'description',component:UserDescriptionComponent},
    {path:'languages',component:ForeignLComponent},
    {path:'userdata',component:UserdataComponent},
    {path:'software',component:SoftwareComponent},
    {path:'certificates',component:CertificatesComponent},
    {path:'interest',component:InterestComponent},
    {path:'projects',component:ProjectsComponent},
    {path:'clousure',component:ClousureComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
