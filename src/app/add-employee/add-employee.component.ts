import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';
import { FakeBackendService } from '../fake-backend.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private fakeHttp: FakeBackendService
  ) {}

  ngOnInit(): void {}

  employee: Employee;
  onAddEmployee(employee: Employee) {
    // this.save();
    let arr: string[] = [];
    // console.log(this.selection);
    this.selection.forEach((val, i) => {
      // console.log(val.name);
      arr.push(val.name);
    });
    console.log('Text editor arry received', arr);
    employee.textEditors = arr;
    // console.log('Employee to be added', employee);

    // Uncomment for actual backend code ,

    // this.employeeService.addEmployee(employee).subscribe(
    //   (response: Employee) => {
    //     console.log('Res from server :: ', response);
    //     // this.getEmployees();
    //     alert('Employee added successfully');
    //     // console.log('Employee added successfully');
    //     this.router.navigate(['/']).then(() => {
    //       window.location.reload();
    //     });
    //     // addForm.reset();
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //     // addForm.reset();
    //   }
    // );
    employee.id = Math.ceil(Math.random() * (999 - 100) + 100).toString();
    console.log('Adding this emp', employee);
    this.fakeHttp.addEmployee(employee);
  }

  languages: string[] = [
    'Java',
    'Haskel',
    'Python',
    'C++',
    'JavaScript',
    'Lisp',
  ];

  language: string;

  textEditors = [
    {
      id: 1,
      name: 'Sublime Text',
    },
    {
      id: 2,
      name: 'Atom',
    },
    {
      id: 3,
      name: 'VS Code',
    },
    {
      id: 4,
      name: 'Notepad++',
    },
    {
      id: 5,
      name: 'Brackets',
    },
  ];

  selected: { id: number; name: string; checked: boolean }[] = [];

  list = [
    {
      id: 1,
      name: 'Sublime Text',
    },
    {
      id: 2,
      name: 'Atom',
    },
    {
      id: 3,
      name: 'VS Code',
    },
    {
      id: 4,
      name: 'Notepad++',
    },
    {
      id: 5,
      name: 'Brackets',
    },
  ];

  selection: { id: number; name: string }[] = [];

  getSelection(item: { id: number; name: string }) {
    return this.selection.findIndex((s) => s.id === item.id) !== -1;
  }

  changeHandler(item: any, event: Event) {
    const id = item.id;

    const index = this.selection.findIndex((u) => u.id === id);
    if (index === -1) {
      // ADD TO SELECTION
      // this.selection.push(item);
      this.selection = [...this.selection, item];
    } else {
      // REMOVE FROM SELECTION
      this.selection = this.selection.filter((user) => user.id !== item.id);
      // this.selection.splice(index, 1)
    }
  }

  save() {
    console.log(this.selection);
  }
}
