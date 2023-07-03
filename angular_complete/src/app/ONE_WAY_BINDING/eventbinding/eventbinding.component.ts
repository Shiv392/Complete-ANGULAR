import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {
  str:string="";
clickbtn(){
  alert('this is button')
}
getData(e:string){
  console.log(e);
  this.str+=e
}
getinputdata(){
 alert(this.str)
}
getBlur(e:string){
  alert(`blue event ${e}`)
}
}
