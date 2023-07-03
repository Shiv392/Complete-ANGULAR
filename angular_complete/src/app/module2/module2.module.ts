import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { User2Component } from './user2/user2.component';
import { User3Component } from './user3/user3.component';

@NgModule({
    declarations:[
    User2Component,
    User3Component
  ],
    imports:[

    ],
exports:[
   User2Component,User3Component
    ]
})
export class Module2Module{}