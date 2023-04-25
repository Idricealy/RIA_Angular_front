import { Injectable } from '@angular/core';
import {Api} from "../api/api.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url : string = 'login'
  constructor(private apiService: Api) { }

  login(email: string | undefined, password: string | undefined) {
    const data = {
      email: email,
      password: password
    }

    return this.apiService.post(this.url, data)
  }

}
