import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';
import { FakeBackendService } from '../fake-backend.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService,private router:Router,private fakeHttp:FakeBackendService) { }


  ngOnInit(): void {
  }

  editEmployee : Employee;
  
  onUpdateEmployee(employee:Employee):void{
    console.log(employee);
    
    // Uncomment for actual backend
    
    // this.employeeService.updateEmployee(employee).subscribe(
    //   (response: Employee) => {
    //     console.log(response);
    //     // this.getEmployees();
    //     alert('Successfully updated');
    //     this.router.navigate(['/']).then(()=>{
    //       window.location.reload();
    //     });
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // );
    this.fakeHttp.updateEmployee(employee);
  }

  // public getEmployees(): void {
  //   this.employeeService.getEmployees().subscribe(
  //     (response: Employee[]) => {
  //       this.employees = response;
  //       console.log(this.employees);
  //     },
  //     (error: HttpErrorResponse) => {
  //       console.log(error.message);
  //     }
  //   );
  // }
 

}
