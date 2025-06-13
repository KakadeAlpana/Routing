import { Component, OnInit, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
   standalone: true,
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent implements OnInit{

  newData :string = "Angular 19";
  inputType ='Checkbox';
  totalCount : number = 101;
  isPresent :boolean = true;

  studentData :string ="bg-success";

  cityName :string ="Pune";

  // signal declaration
  personalName = signal("Alpana Pawar")
 
  constructor(private router : Router){
   
  }
  ngOnInit(): void {
   
}
// beow for routing from html 
  gotoAdminPanal(){
    this.router.navigateByUrl('admin')
  }
  showMessage(){
    alert("Hello , welcome in your data");
    console.log("hey,you click me")
  }
  changeVariblename(){
    this.newData ="React new version";
    // signal value change with set method
    this.personalName.set("Piyusha Pawar")
  }
}
