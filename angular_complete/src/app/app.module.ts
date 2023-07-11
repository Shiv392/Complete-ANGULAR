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
import { EventbindingComponent } from './ONE_WAY_BINDING/eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './TWO_WAY_BINDING/twowaybinding/twowaybinding.component';
import { NgifComponent } from './directives/ngif/ngif.component';
import { NgforComponent } from './directives/ngfor/ngfor.component';
import { NgswitchComponent } from './directives/ngswitch/ngswitch.component';
import { CustomDirective } from './directives/custom.directive';
import { CustomdirectiveusingComponent } from './directives/customdirectiveusing/customdirectiveusing.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { PipeComponent } from './PIPE/pipe/pipe.component';
import { CustomPipePipe } from './PIPE/custompipe/customPipe.pipe';
import { CustomComponent } from './PIPE/custompipe/custom/custom.component';
import { ReactiveComponent } from './FORMS/reactive/reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudComponent } from './crud/crud.component';



@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2shivComponent,
    InterpolationComponent,
    ProperybindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    CustomDirective,
    CustomdirectiveusingComponent,
    TemplateRefComponent,
    PipeComponent,
    CustomPipePipe,
    CustomComponent,
  
    ReactiveComponent,
       CrudComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  CommonModule,Module1Module,Module2Module,FormsModule,
  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
