import {Component, EventEmitter, Output} from '@angular/core';
import {Api} from "../../../services/api/api.service";
import {LogoutService} from "../../../services/logout/logout.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  private url : string = 'logout'

  constructor(
    private apiService: Api,
    private logoutService : LogoutService,
    private router : Router

  ) {

  }
  logout() {
    this.logoutService.logout()
      .subscribe((response) => {
        if(response.message != "Unauthenticated.") {
          window.localStorage.removeItem('id');
          window.localStorage.removeItem('fullName');
          window.localStorage.removeItem('user');
          window.localStorage.removeItem('token');
          this.router.navigate(['/'])
        } else {
          alert('Une erreur est survenu lors de votre déconnexion !')
        }
      })
  }
}
