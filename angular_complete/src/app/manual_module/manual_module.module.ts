import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LoginComponent } from './login/login.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
    LoginComponent
  ],
    imports:[NgModule,BrowserModule,CommonModule],
    exports:[
        LoginComponent
    ],
    providers:[],
    bootstrap:[]
})

export class ManualModule{}