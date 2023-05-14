import { Injectable } from '@angular/core';
import {Api} from "../api/api.service";

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private url : string = 'enseignants'
  constructor(private apiService: Api) { }

  getAllCoursesByEnseignant() {
    const path =  this.url+'/mescours'
    return this.apiService.get(path)
  }

  getStudentPerCourse(idCours: number | undefined) {
    const path = `${this.url}/${idCours}/mystudents`
    return this.apiService.get(path)
  }

  postCourse(data: any) {
    const path =  this.url+'/addcourse'
    return this.apiService.post(path, data)
  }

  updateCourse(idCours: any, data: any) {
    const path =  this.url+'/mescours/'+idCours
    return this.apiService.post(path, data)
  }

  deleteCourse(idCours: number){
    const path =  this.url+'/mescours/'+idCours
    return this.apiService.delete(path)
  }

  addStudentInCourse(idCours: number | undefined, data: any) {
    const path =  this.url+'/'+idCours+'/addstudent'
    return this.apiService.post(path, data)
  }

  addNoteToStudent(idCours: number | undefined, idStudent: number, data: any) {
    const path = this.url+`/${idCours}/${idStudent}/addgrade`
    return this.apiService.post(path, data)
  }

}
