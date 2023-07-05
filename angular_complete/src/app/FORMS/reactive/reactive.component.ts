import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

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
profile2=new FormGroup({
  name:new FormControl(''),
  emailid: new FormControl(''),
  mobileNo : new FormControl(''),
  address2:new FormGroup({
    street:new FormControl(''),
    city:new FormControl(''),
    state:new FormControl(''),
    zipCode:new FormControl('')
  })
  })
onSubmit(){
  console.log(this.profile.value);
  
}
submitProfile2(){
    console.log(this.profile2.value);
}

public validationform= new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  password: new FormControl(null,[Validators.required,Validators.min(6)]),
  password2: new FormControl(null,[Validators.required])
})
comparePassword(){
  
}
validationformsubmit(){
  console.log(this.validationform.value);
  
}
get email(){
  return this.validationform.get('user')
}
}
