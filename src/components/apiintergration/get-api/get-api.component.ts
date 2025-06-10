import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { GetapiCallService } from '../../../otherservice/services/getapi-call.service';
import { AlertComponent } from "../../reusableComponent/alert/alert.component";
import { ButtonCompComponent } from "../../reusableComponent/button-comp/button-comp.component";

@Component({
  selector: 'app-get-api',
  imports: [CommonModule, AlertComponent, ButtonCompComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  // this is another way of crating object of httpClient
  //  http =inject(HttpClient)

  userList: any[] = []
  employeeList: any[] = []
  loginData:any[]=[]
  constructor(private getservice: GetapiCallService) {
    //  this.getAllEmployee()
    // this.getAllLoginUser(); 

  }

  getAllUsers() {
    debugger;
   this.getservice.getAllUSers().subscribe((res: any) => {
      this.userList = res;
      console.log(res)
    })
  }

  getAllLoginUser(){
   this.getservice.getLoginUsers().subscribe((rest:any)=>{
      this.loginData =rest;
      console.log(rest)
    })
  }

    getAllEmployee() {
      debugger;
   this.getservice.getEmplyoee().subscribe((result: any) => {
      this.employeeList = result;
      console.log(result)
    })
  }

}

