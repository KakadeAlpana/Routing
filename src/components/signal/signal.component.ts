import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  // Sigal decration
 firstName = signal('Angualr is initial value');
 lastName = signal('This is initial value of lastName')
 rollNo =signal<number>(123)
 
//  Normal Varible
 middleName:string = 'This is initial vlaue of middle name'

// for computed

firstVar = signal("Alpana");
secondVar = signal("Kakade");
fullNewVlaue = computed(()=> this.firstVar() + " " +this.secondVar());

// Array data in Signal
CityList = signal(['pune','Mumbai'])

// Object with signal
studentObj=signal({
  name:'Piyusha',
  age:9,
  city:'Pune'
})

 constructor(){
  const fname = this.firstName()
  setTimeout(()=> {
    // debugger;s
    this.lastName.set("this new value changing after few sec");
    this.middleName= "this is new vlaue of few sec and used change detecion(alue will not update on UI)"
  }, 9000)
 }

 onChangeValue(){
  this.firstName.set('React is newly changed value')
 }

//  
changeFirstVaribaleValue(){
  this.firstVar.set("Archana");
}
changesecondVaribaleValue(){
  this.secondVar.set("Pawar")
}

// 
addCityName(){
  this.CityList.set([...this.CityList(),'Nagpur'])
}
// 
changeCity(){
  this.studentObj.set({...this.studentObj(),city:'Malegao'})
}
}
