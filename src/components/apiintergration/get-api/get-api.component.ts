import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [CommonModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  // this is another way of crating object of httpClient
  //  http =inject(HttpClient)

  userList: any[] = []
  employeeList: any[] = []
  loginData:any[]=[]
  constructor(private http: HttpClient) {
    // this.getAllEmployee()
    this.getAllLoginUser(); 

  }

  getAllUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res: any) => {
      this.userList = res;
      console.log(res)
    })
  }
  getAllEmployee() {
    this.http.get('https://6842b073e1347494c31d96e1.mockapi.io/EmployeeManagement/GetAllEmployee').subscribe((result: any) => {
      this.employeeList = result;
      console.log(result)
    })
  }
  getAllLoginUser(){
    this.http.get('https://6842b85ce1347494c31db50f.mockapi.io/EmployeeManagement/login').subscribe((rest:any)=>{
      this.loginData =rest;
      console.log(rest)
    })
  }


}

