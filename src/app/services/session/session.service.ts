import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  get fullName(): string {
    return this._fullName;
  }

  set fullName(value: string) {
    this._fullName = value;
  }

  get user(): string {
    return this._user;
  }

  set user(value: string) {
    this._user = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
  private static instance: SessionService; // Instance unique de la classe

  private _fullName: string = '';
  private _user: string = '';
  private _id: number = 0;

  private constructor() {
    // Empêche l'instanciation directe de la classe
  }

  static getInstance(): SessionService {
    if (!SessionService.instance) {
      SessionService.instance = new SessionService();
    }
    return SessionService.instance;
  }
}
