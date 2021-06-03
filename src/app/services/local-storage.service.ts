import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {}

  getStorageEmail() {
    return  localStorage.getItem('email')
  }

  updateStorage(email: any) {
    localStorage.setItem('email', email);

  }

  removeStorage() {
    localStorage.removeItem('email');
  }
}
