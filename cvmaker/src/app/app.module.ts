import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { CvEditorComponent } from './cv-editor/cv-editor.component';
import { UserdataComponent } from './cv-editor/userdata/userdata.component';
import { EducationComponent } from './cv-editor/education/education.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CvItemComponent } from './dashboard/cv-item/cv-item.component';
import { ClousureComponent } from './cv-editor/clousure/clousure.component';
import { ExperienceComponent } from './cv-editor/experience/experience.component';
import { ForeignLComponent } from './cv-editor/foreign-languages/f-languages.component';
import { SoftwareComponent } from './cv-editor/software/software.component';
import { ProjectsComponent } from './cv-editor/projects/projects.component';
import { CertificatesComponent } from './cv-editor/certificate/certificate.component';
import { InterestComponent } from './cv-editor/interest/interest.component';
import { PreviewComponent } from './cv-editor/preview/preview.component';
import { UserdataPreviewComponent } from './cv-editor/preview/userdata-preview/userdata-preview.component';
import { ExpPreviewComponent } from './cv-editor/preview/exp-preview/exp-preview.component';
import { EducationPreviewComponent } from './cv-editor/preview/education-preview/education-preview.component';
import { TwoDigitsMonthPipe } from './shared/pipes/two-digit-month.pipe';
import { SoftwarePreviewComponent } from './cv-editor/preview/software-preview/software-preview.component';
import { CertificatePreviewComponent } from './cv-editor/preview/certificate-preview/certificate-preview.component';
import { ClousurePreviewComponent } from './cv-editor/preview/clousure-preview/clousure-preview.component';
import { LanguagePreviewComponent } from './cv-editor/preview/language-preview/language-preview.component';
import { InterestPreviewComponent } from './cv-editor/preview/interest-preview/interest-preview.component';
import { ProjectsPreviewComponent } from './cv-editor/preview/projects-preview/projects-preview.component';
import { UserDescriptionComponent } from './cv-editor/user-description/user-description.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    CvEditorComponent,
    UserdataComponent,
    EducationComponent,
    ExperienceComponent,
    ForeignLComponent,
    SoftwareComponent,
    CvItemComponent,
    ClousureComponent,
    ProjectsComponent,
    CertificatesComponent,
    InterestComponent,
    PreviewComponent,
    UserdataPreviewComponent,
    ExpPreviewComponent,
    EducationPreviewComponent,
    TwoDigitsMonthPipe,
    SoftwarePreviewComponent,
    CertificatePreviewComponent,
    ClousurePreviewComponent,
    LanguagePreviewComponent,
    InterestPreviewComponent,
    ProjectsPreviewComponent,
    UserDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
