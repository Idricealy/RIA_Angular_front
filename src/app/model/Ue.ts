import {Courses} from "./Courses";

export interface Ue{
  "id": number,

  "description": string,

  cours: Courses[]
  "nom_ue": string,
  "filiere": string,
  "niveau": string,

  "isCollapsed" : boolean

}
