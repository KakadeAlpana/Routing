import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../../app/constant/constant';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetapiCallService {
// subject 
 public RoleChange$:Subject<string> =new Subject<string>
 public NewRole$:BehaviorSubject<string> =new BehaviorSubject<string>("")


   apiUrl = 'https://6842b073e1347494c31d96e1.mockapi.io/EmployeeManagement/';
  constructor(private http: HttpClient) { }

  getEmplyoee(){
   return this.http.get(this.apiUrl + 'GetAllEmployee')
  }

  getAllUSers(){
    return this.http.get(Constant.API_URL + '/users')
  }

  getLoginUsers(){
    return this.http.get(this.apiUrl + 'login')
  }

//   login(data: any) {
//   return this.http.post('http://localhost:4000/login', data);
// }
}
