import {Component, Input, OnInit, Output} from '@angular/core';
import {EmployeeCreateDto} from '../_models/employeeCreateDto';
import {EmployeeService} from '../_services/employee.service';
import {Employee} from '../_models/employee';
import {EventEmitter} from 'events';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter();
  employeeUpdate: Employee;
  bodyDiv = false;
  inputName = '';
  employee: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  getEmployee(id: number) {
    this.employeeService.getEmployee(id).subscribe(
      data => {
        this.employeeUpdate = data;
      },
      error => {console.log(error); }
    );
  }
  updateEmployee(employeeUpdate: Employee) {
    this.employeeService.updateEmployee(employeeUpdate).subscribe();
  }

  posalji() {
    console.log('showName clicked.');
    this.bodyDiv = true;
    // this.employee.id = document.getElementById('id').value;
    console.log(this.inputName);
    console.log(this.bodyDiv);
    this.buttonClicked.emit(this.inputName);
  }
}
