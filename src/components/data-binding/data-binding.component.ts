import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent implements OnInit{
 
  constructor(private router : Router){

  }
  ngOnInit(): void {
   
}
  gotoAdminPanal(){
    this.router.navigateByUrl('admin')
  }
}
