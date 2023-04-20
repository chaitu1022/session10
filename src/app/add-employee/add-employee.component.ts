import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  forms = {

    x: '',
    y: ''
  };

  constructor(private appService: AppService) {

  }


  AddEmployee(empForm: NgForm) {
    if(empForm.form.valid) {
    this.appService.addEmployee(empForm.form.value);
    empForm.form.reset();
    }else {
      console.log(empForm);
      empForm.form.markAllAsTouched()
     // Object.keys(empForm.form.controls).forEach(key => empForm.form.markAllAsTouched());
    }
  }


}
