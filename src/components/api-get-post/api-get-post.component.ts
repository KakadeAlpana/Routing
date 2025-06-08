import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api-get-post',
  imports: [FormsModule],
  templateUrl: './api-get-post.component.html',
  styleUrl: './api-get-post.component.css'
})
export class ApiGetPostComponent implements OnInit{

  
 http = inject(HttpClient)

  deptData :any[]=[];

departObj :any={
  // departmentId: 0,
  departmentName: "",
  departmentLogo: ""
}
  ngOnInit(): void {
    // this.getDepartment();
  }

    onSubmit(){
      console.log('Sending:', this.departObj);
      

      this.http.post('https://projectapi.gerasim.in/api/EmployeeManagement/AddNewDepartment',this.departObj).subscribe((res:any)=>{
      
         this.getDepartment() 
        // if(res.result){
        //   alert("dept created succesfully !")

        // }else{
        //   alert("Dept not created")
        // }

      })
    }

    getDepartment(){
      this.http.get('https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment').subscribe((result:any)=>{
       console.log(result, "get")
        this.deptData =result.data;
      })
    }
}
