import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Login} from "../../../model/Login";
import {LoginService} from "../../../services/login/login.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @Output() onLogin: EventEmitter<Login> = new EventEmitter<Login>();
  email: string | undefined;
  password: string | undefined;


  constructor(
    private loginService : LoginService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginService.login(this.email, this.password)
      .subscribe((response) => {
        console.log(response)

        if(response.user){
          window.localStorage.setItem('id', response.user.id);
          window.localStorage.setItem('fullName', response.user.fullName);
          window.localStorage.setItem('user', response.user.user);
          window.localStorage.setItem('token', response.token);
          this.router.navigate([`/portal`]);
        } else {
          alert('Vos identifiants sont incorrectes !');
        }
      })
  }
}
