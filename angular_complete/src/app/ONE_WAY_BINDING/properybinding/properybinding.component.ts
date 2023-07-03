import { Component } from '@angular/core';

@Component({
  selector: 'app-properybinding',
  templateUrl: './properybinding.component.html',
  styleUrls: ['./properybinding.component.css']
})
export class ProperybindingComponent {
typeflag= "password";
flag2="text";
flag=true;
submitbtn(){
  this.typeflag='text'
  this.flag=!this.flag;
}
Change(){
  this.flag2="password"
}
}
