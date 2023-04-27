import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';

import { LoginService } from "./services/login/login.service";
import { Api } from "./services/api/api.service";
import { PortalComponent } from './components/portal/portal/portal.component';
import { EnseignantComponent } from './components/portal/portal/enseignant/enseignant.component';
import { AdminComponent } from './components/portal/portal/admin/admin.component';
import { StudentComponent } from './components/portal/portal/student/student.component';
import { EdtComponent } from './components/portal/portal/enseignant/edt/edt.component';
import { CoursComponent } from './components/portal/portal/enseignant/cours/cours.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PortalComponent,
    EnseignantComponent,
    AdminComponent,
    StudentComponent,
    EdtComponent,
    CoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Api, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
