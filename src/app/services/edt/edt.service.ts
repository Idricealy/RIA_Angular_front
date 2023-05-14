import { Injectable } from '@angular/core';
import {Api} from "../api/api.service";

@Injectable({
  providedIn: 'root'
})
export class EdtService {

  private url : string = 'edt'

  constructor(private apiService: Api) { }

  postNewEdt(data : any) {
    const path = "newedt"
    return this.apiService.post(path, data)
  }

  getAllEdt() {
    const path = this.url+'/all'
    return this.apiService.get(path)
  }

  editEdt(data : any, id: number) {
    const path = this.url+"/"+ id
    return this.apiService.post(path, data)
  }

  removeEdt(id: number) {
    const path = this.url+"/"+ id
    return this.apiService.delete(path)
  }

}
