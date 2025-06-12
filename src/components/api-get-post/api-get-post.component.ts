import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../model/class/class';

@Component({
  selector: 'app-api-get-post',
  imports: [FormsModule, CommonModule, JsonPipe],
  templateUrl: './api-get-post.component.html',
  styleUrl: './api-get-post.component.css'
})
export class ApiGetPostComponent implements OnInit {


  http = inject(HttpClient)


  departObj: Customer={
    departmentId: 0,
  departmentName: '',
  departmentLogo: ''
  }
 
  deptData: Customer[] = [];

ngOnInit(): void {
  const stored = localStorage.getItem('departments');
    this.deptData = stored ? JSON.parse(stored) : [];
  console.log('Loaded deptData:', this.deptData);
}
 onEdit(data:any){
  console.log(data)
  this.departObj = data;
 }
 onDelete(id:number){
  console.log(id)
  const idDelate = confirm("Are you sure ?")
  if(idDelate){
   this.deptData = this.deptData.filter(item => item.departmentId !== id);
    
  }
 }

 
  onSubmit() {
    console.log('Sending:', this.departObj);
    this.http.post('https://projectapi.gerasim.in/api/EmployeeManagement/AddNewDepartment', this.departObj).subscribe((res: any) => {
      if (res?.data) {

        this.deptData.push(res.data)
        this.departObj= {
          departmentId: 0,
          departmentName: "",
          departmentLogo: ""
        }

      } else {
        alert("detp not created")
      }

    })
  }
  // onSubmit() {
  //   this.departObj.departmentId = Date.now();
  //   // Push to in-memory array
  //   this.deptData.push({ ...this.departObj });

  //   // Save to localStorage
  //   localStorage.setItem('departments', JSON.stringify(this.deptData));

  //   // Reset form
  //   this.departObj = {
  //     departmentId:0,
  //     departmentName: '',
  //     departmentLogo: ''
  //   };

  //   alert('Department added!');
  // }


  // getDepartment() {
  //   this.http.get('https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment').subscribe((result: any) => {
  //     console.log(result, "get")
  //     this.deptData = result.data;
  //   })
  // }
}
