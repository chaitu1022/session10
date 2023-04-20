import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

 private employees: Employee[] =[];


  constructor() { }

  addEmployee(emp: Employee) {
    this.employees.push(emp);
  }

  getEmployee(): Employee[] {
    return this.employees;
  }

}

export interface Employee {
  name: string;
  email: string;
}
