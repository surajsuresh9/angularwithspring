import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Employees } from '../assets/Employees';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root',
})
export class FakeBackendService {
  employees: any[] = [];

  constructor(private router:Router) {}

  getAllEmployees(): Employee[] {
    this.employees = Employees;
    console.log('Returning fake employees');
    return this.employees;
  }

  deleteEmployee(id: number): void {
    console.log('id is ', id);
    let index = this.employees.indexOf(id);
    console.log(index);

    this.employees.forEach((e, i) => {
      if (e.id == id) {
        console.log('Id found at', i);
        console.log('Removing', i);
        this.employees.splice(i, 1);
      }
    });
    alert('Successfully deleted');
  }

  addEmployee(emp: any): void {
    console.log('Adding employee', emp);
    this.employees.push(emp);
    console.log('Employee successfully added');
    alert('Employee successfully added');
    console.log(this.employees);
  }

  updateEmployee(employee: any) {
    let found: boolean = false;
    let num; 
    let empToBeUpdated:any;
    console.log('employee to be updated received', employee);
    this.employees.forEach((e, i) => {
      num = i;
      if (e.id == employee.id) {
        found = true;
        empToBeUpdated = e;
      }
    });
    if(found){
      console.log('Employee to be updated exists',num);
      console.log(empToBeUpdated);
      empToBeUpdated.id = employee.id;
      empToBeUpdated.name = employee.name;
      empToBeUpdated.address = employee.address;
      empToBeUpdated.gender = employee.gender;
      empToBeUpdated.description = employee.description;
      console.log('Employee Updated',empToBeUpdated);
      alert('Employee Successfully Updated');
      this.router.navigate(['/']);
      // .then(()=>{
      //   window.location.reload();
      // });
    }else{
      alert('Employee to be updated does not exist, Please check id again');
      this.router.navigate(['/updateEmployee']).then(()=>{
        window.location.reload();
      });
    }
  }

  // getEmployee(id:number){
  //   let emp;
  //   this.employees.forEach((k,i)=>{
  //     if(k.id == id){}
  //   })
  // }
}



// this.router.navigate(['/']).then(() => {
//   //       window.location.reload();