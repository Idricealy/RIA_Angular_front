import { Injectable } from '@angular/core';
import {Api} from "../api/api.service";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url : string = 'students'
  constructor(private apiService: Api) { }

  getAllStudent() {
    const path = this.url
    return this.apiService.get(path)
  }

  getNotes() {
    const path = this.url+'/mesnotes'
    return this.apiService.get(path)
  }

  getEdt() {
    const path = this.url+'/edt'
    return this.apiService.get(path)
  }

}
