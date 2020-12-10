import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Data} from '../_models/data';
import {map, tap} from 'rxjs/operators';
import {Employee} from '../_models/employee';
import {Observable} from 'rxjs';
import {EmployeeCreateDto} from '../_models/employeeCreateDto';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  adresa = 'http://dummy.restapiexample.com/api/v1/employees';
  constructor(private http: HttpClient) { }

  // listanje radi y MVC
  getEmployees(): Observable<Data> {
    return this.http.get<Data>(`${this.adresa}`);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.adresa}` + '/employee/' + id);
  }

  createEmployee(employeeModel: EmployeeCreateDto){
    return this.http.post(`${this.adresa}` + '/create', employeeModel);
  }

  deleteEmployee(id: number){
    return this.http.delete(`${this.adresa}/delete/${id}`);
  }
  // nisam mogao da pristupim na stranici API odeljku Details pa nisam mogao da vidim jel vrsi Update nad atributima imenovanima kao
  // u getEmployees employee_name, employee_age... ili nad atributima name, age
  updateEmployee(employeeDto: Employee) {
    return this.http.put(`${this.adresa}` + '/update/' + `${employeeDto.id}`, employeeDto);
  }
}
