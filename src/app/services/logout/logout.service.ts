import { Injectable } from '@angular/core';
import {Api} from "../api/api.service";

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  private url : string = 'logout'

  constructor(private apiService: Api) { }

  logout() {
    return this.apiService.post(this.url, {})
  }
}
