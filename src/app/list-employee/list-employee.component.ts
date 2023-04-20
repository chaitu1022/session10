import { Component } from '@angular/core';
import { AppService, Employee } from '../app.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {

  employees: Employee[] = [];

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.employees = this.appService.getEmployee();
  }

}
