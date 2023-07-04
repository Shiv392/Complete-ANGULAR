import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
public person:any={
  name:'shiv soni',age:22,address:'raipur'
}
public name:string='shiv soni';
lowername:string='SHIV SONI';
public money:number=220;
public price:number=20002.23;
public marks: number=0.86;
public today=new Date()
public slicetext:string='shiv soni'
}
