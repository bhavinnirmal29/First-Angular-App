import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { StudentinfoComponent } from './components/studentinfo/studentinfo.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { SalaryCalculatorComponent } from './components/salary-calculator/salary-calculator.component';
import { OnewaybindingComponent } from './components/onewaybinding/onewaybinding.component';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegformTemplateComponent } from './components/regform-template/regform-template.component';
import { PizzaformTemplateComponent } from './components/pizzaform-template/pizzaform-template.component';
import { RegFormReactiveComponent } from './components/reg-form-reactive/reg-form-reactive.component';
import { CounterComponent } from './components/counter/counter.component';
import { Counter1Component } from './components/counter1/counter1.component';
import { ConsumeserviceComponent } from './components/consumeservice/consumeservice.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    StudentinfoComponent,
    CalculatorComponent,
    SalaryCalculatorComponent,
    OnewaybindingComponent,
    TwowaybindingComponent,
    ProductListComponent,
    RegformTemplateComponent,
    PizzaformTemplateComponent,
    RegFormReactiveComponent,
    CounterComponent,
    Counter1Component,
    ConsumeserviceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
