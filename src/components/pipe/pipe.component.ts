import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../../otherservice/custompipe/na.pipe';
import { state } from '@angular/animations';
import { GetapiCallService } from '../../otherservice/services/getapi-call.service';

@Component({
  selector: 'app-pipe',
  imports: [NaPipe,AsyncPipe,JsonPipe,DatePipe,UpperCasePipe,LowerCasePipe,TitleCasePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  firstName : string ='Angular';

  currentDate : Date = new Date();

  student={
    name:'Alpana',
    city:'Pune',
    age:34,
    state :'Mh'
  }

  currentRole:string =''
  currentTime :Observable<Date> =new Observable<Date>


  constructor(private getapiSer:GetapiCallService){
    this.currentTime = interval(1000).pipe(map(()=> new Date() ));
    // 
this.getapiSer.NewRole$.subscribe((role:string)=>{
    this.currentRole = role
      console.log(role)
    })  }
}
