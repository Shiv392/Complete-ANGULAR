import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {
person:any=[
  {name:'shivsoni',age:22,address:'raipur'},
  {
    name:'aliyasoni',age:5,address:'durg'
  },{
    name:'riyasoni',age:3,address:'raipur'
  },
  {
    name:'pushpasoni',age:33,address:'raipur'
  },{
    name:'payalsoni',age:20,address:'raipur'
  }
]
}
