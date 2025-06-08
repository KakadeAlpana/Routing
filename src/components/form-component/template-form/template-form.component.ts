import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
 studentObj ={
  firstName :'',
  lastName:'',
  userName:'',
  city:'',
  state: '',
  ZipCode:'',
  isAcceptTerm:''
 }
 
 formValue:any;
 onSubmit(){
 this.formValue = this.studentObj;
 console.log(this.formValue)
 }
 onReset(){
 this.studentObj ={
  firstName :'',
  lastName:'',
  userName:'',
  city:'',
  state: '',
  ZipCode:'',
  isAcceptTerm:''
 }
 }
}
