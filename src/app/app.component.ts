import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Employee } from './Employee';
// import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { FakeBackendService } from './fake-backend.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.getEmployees();
  }

  title = 'Employees';
  employees: Employee[] = [];
  employee: Employee;
  constructor(
    private http: HttpClient,
    private employeeService: EmployeeService,
    private router: Router,
    private fakeHttp:FakeBackendService
  ) {
    // this.http
    //   .get<Employee[]>('http://localhost:9090/employee/all')
    //   .subscribe((data) => {
    //     this.employees = data;
    //     data.forEach((e) => {
    //       console.log(e);
    //     });
    //   });
  }

  updateEmployee() {
    // alert('id is'+id);
  }

  msg: string;
  // public getEmployees(): void {
  //   this.employeeService.getEmployees().subscribe(
  //     (response: Employee[]) => {
  //       console.log('Response from server',response);
  //       this.employees = response;
  //       console.log(this.employees);
  //     },
  //     (error: HttpErrorResponse) => {
  //       console.log(error.message);
  //     }
  //   );
  // }


  public getEmployees():void{
    console.log('Getting fake employees');
    this.employees = this.fakeHttp.getAllEmployees();
  }

  public ondeleteEmployee(employeeId: any): void {
    // this.employeeService.deleteEmployee(employeeId).subscribe(
    //   (response: void) => {
    //     console.log(response);
    //     this.getEmployees();
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // );
    this.fakeHttp.deleteEmployee(employeeId);
  }

  public onUpdateEmloyee(employee: Employee): void {
    this.employeeService.updateEmployee(employee).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
  
}
