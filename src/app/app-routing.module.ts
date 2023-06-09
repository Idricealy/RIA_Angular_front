import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/auth/login/login.component";
import {EnseignantComponent} from "./components/portal/portal/enseignant/enseignant.component";
import {PortalComponent} from "./components/portal/portal/portal.component";
import {AdminComponent} from "./components/portal/portal/admin/admin.component";
import {LogoutComponent} from "./components/auth/logout/logout.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'portal', component: PortalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [
    LogoutComponent
  ],
  exports: [RouterModule, LogoutComponent]
})
export class AppRoutingModule { }
