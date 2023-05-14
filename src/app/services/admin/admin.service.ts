import { Injectable } from '@angular/core';
import {Api} from "../api/api.service";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url : string = 'admin'
  constructor(private apiService: Api) { }

  getAllFiliere() {
    const path = this.url+'/filieres'
    return this.apiService.get(path)
  }

  newFiliere(data : any) {
    const path = this.url+'/newfiliere'
    return this.apiService.post(path, data)
  }

  updateFiliere(id: number | undefined, data: any) {
    const path = this.url+'/filieres/'+id
    return this.apiService.post(path, data)
  }

  deleteFiliere(id : number) {
    const path = this.url+'/filieres/'+id
    return this.apiService.delete(path)
  }

  getAllUes() {
    const path = 'ues'
    return this.apiService.get(path)
  }

  updateUe(id: number | undefined, data: any) {
    const path = 'ues/'+id
    return this.apiService.post(path, data)
  }

  newUe(data : any) {
    const path = 'newue'
    return this.apiService.post(path, data)
  }

  deleteUe(id : number) {
    const path = 'ues/'+id
    return this.apiService.delete(path)
  }
}
