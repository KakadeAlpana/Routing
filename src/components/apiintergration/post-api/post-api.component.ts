import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Department } from '../../../otherservice/interface/department';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule,CommonModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent  {

  http = inject(HttpClient)

  deptData :Department[]=[];

departObj :Department={
  id: '',
  deptName: "",
  deptLogo: ""
}
index: any;


    onSubmit(){
      this.http.post('https://684445b771eb5d1be032df62.mockapi.io/departmentManagement/api/addDepartment',this.departObj).subscribe((res:any)=>{
       console.log(res, "post")
        if(res){
          alert("dept created succesfully !")
      this.getDepartment() 

        }else{
          alert("Dept not created")
        }

      })
    }

    getDepartment(){
      this.http.get('https://684445b771eb5d1be032df62.mockapi.io/departmentManagement/api/getDepartment').subscribe((result:any)=>{
       console.log(result, "get")
        this.deptData =result;
      })
    }
}
