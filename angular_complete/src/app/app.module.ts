import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2shivComponent } from './comp2/comp2.component';
import { CommonModule } from '@angular/common';
import { Module1Module } from './module1/module1.module';
import { Module2Module } from './module2/module2.module';
import { FormsModule } from '@angular/forms';
import { InterpolationComponent } from './ONE_WAY_BINDING/interpolation/interpolation.component';
import { ProperybindingComponent } from './ONE_WAY_BINDING/properybinding/properybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2shivComponent,
    InterpolationComponent,
    ProperybindingComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  CommonModule,Module1Module,Module2Module,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
