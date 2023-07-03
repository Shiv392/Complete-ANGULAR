import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2shivComponent } from './comp2/comp2.component';
import { ManualModule } from './manual_module/manual_module.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2shivComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ManualModule,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
