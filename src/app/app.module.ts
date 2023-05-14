import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScheduleModule, DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';
import { DxSchedulerModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';

import { LoginService } from "./services/login/login.service";
import { Api } from "./services/api/api.service";
import { PortalComponent } from './components/portal/portal/portal.component';
import { EnseignantComponent } from './components/portal/portal/enseignant/enseignant.component';
import { AdminComponent } from './components/portal/portal/admin/admin.component';
import { StudentComponent } from './components/portal/portal/student/student.component';
import { CoursComponent } from './components/portal/portal/enseignant/cours/cours.component';
import { ModalStudentComponent } from './components/portal/portal/enseignant/modal/modal-student/modal-student.component';
import { ModalNewCourseComponent } from './components/portal/portal/enseignant/modal/modal-new-course/modal-new-course.component';
import { ModalAddStudentComponent } from './components/portal/portal/enseignant/modal/modal-add-student/modal-add-student.component';
import { CoursStudentComponent } from './components/portal/portal/student/cours-student/cours-student.component';
import { EdtComponent } from './components/portal/portal/edt/edt.component';
import { FiliereComponent } from './components/portal/portal/admin/filiere/filiere.component';
import { ModalAddFiliereComponent } from './components/portal/portal/admin/modal/modal-add-filiere/modal-add-filiere.component';
import { UeComponent } from './components/portal/portal/admin/ue/ue.component';
import { ModalAddUeComponent } from './components/portal/portal/admin/modal/modal-add-ue/modal-add-ue.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PortalComponent,
    EnseignantComponent,
    AdminComponent,
    StudentComponent,
    CoursComponent,
    ModalStudentComponent,
    ModalNewCourseComponent,
    ModalAddStudentComponent,
    CoursStudentComponent,
    EdtComponent,
    FiliereComponent,
    ModalAddFiliereComponent,
    UeComponent,
    ModalAddUeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ScheduleModule,
    DxSchedulerModule
  ],
  providers: [Api, LoginService, DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
