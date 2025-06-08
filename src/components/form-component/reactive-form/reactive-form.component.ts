import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { FormGroup,FormControl, ReactiveFormsModule, FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

 studentDataObj :FormGroup = new FormGroup({
  firstName : new FormControl("",[Validators.required]),
  lastName : new FormControl("",[Validators.required]),
  userName :new FormControl("abcd@as",[Validators.required,Validators.email]),
  city :new FormControl("",[Validators.required]),
  state:new FormControl("",[Validators.required]),
  zipcode: new FormControl("",[Validators.required]),
  isAgreeTerm :new FormControl("",[Validators.required])
 })

 formDatavalue :any;

  onSave(){
    this.formDatavalue =this.studentDataObj.value;
    console.log(this.formDatavalue)
 }
 onReset(){
  this.formDatavalue = " ";
 }
}
