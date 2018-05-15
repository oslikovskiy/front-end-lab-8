import { Injectable } from '@angular/core';
import { ClassInstance } from './class-instance';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor() { }

  getClasses(): ClassInstance[] {
    return JSON.parse(localStorage.getItem('classes')) || [];
  }

  setClasses(classes: ClassInstance[]) {
    localStorage.setItem('classes', JSON.stringify(classes));
  }
}
