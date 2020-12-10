import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {EmployeeService} from '../_services/employee.service';
import {Observable} from 'rxjs';
import {Data} from '../_models/data';
import {Employee} from '../_models/employee';
import {NgForm} from '@angular/forms';
import {EmployeeCreateDto} from '../_models/employeeCreateDto';
import {EventEmitter} from 'events';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  dataServer: Data;
  employee: Employee;
  employeeAdd: EmployeeCreateDto;
  employeeUpdate: EmployeeCreateDto;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      data => {
        this.dataServer = data;
      },
      error => {console.log(error); }
    );
  }

  createEmployee() {
    this.employeeService.createEmployee(this.employeeAdd).subscribe();
  }

  deleteEmployee(employeeId: number){
    this.employeeService.deleteEmployee(employeeId).subscribe();
  }

}
