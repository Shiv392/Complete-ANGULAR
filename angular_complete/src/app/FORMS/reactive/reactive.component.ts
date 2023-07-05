import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  //defininig control of form with initial vlaue;
public name=new FormControl('');
public password=new FormControl(null)
login(){
let obj={name:this.name.value,password:this.password.value}
  
console.log(obj);
}
profile=new FormGroup({
  firstname:new FormControl(''),
  lastname:new FormControl(''),
  age:new FormControl(18),
  address:new FormControl('Raipur')
})
onSubmit(){
  console.log(this.profile.value);
  
}
}
