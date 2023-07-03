import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent {
public color="red";
selectChange(e:any){
  this.color=e;
  console.log(e);
  
}
}
