import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { OnewaybindingComponent } from './components/onewaybinding/onewaybinding.component';
import {StudentinfoComponent} from './components/studentinfo/studentinfo.component';
import {TwowaybindingComponent} from './components/twowaybinding/twowaybinding.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {RegformTemplateComponent} from './components/regform-template/regform-template.component';
import { PizzaformTemplateComponent } from './components/pizzaform-template/pizzaform-template.component';
import { RegFormReactiveComponent } from './components/reg-form-reactive/reg-form-reactive.component';
import { CounterComponent } from './components/counter/counter.component';
import { Counter1Component } from './components/counter1/counter1.component';
import { ConsumeserviceComponent } from './components/consumeservice/consumeservice.component';

const routes: Routes = [
  {path:'First',component:FirstComponent},
  {path:'StudentInfo',component:StudentinfoComponent},
  {path:'Oneway',component:OnewaybindingComponent},
  {path:'Twoway',component:TwowaybindingComponent},
  {path:'PInfo',component:ProductListComponent},
  {path:'RegForm',component:RegformTemplateComponent},
  {path:'Pizzaform',component:PizzaformTemplateComponent},
  {path:'RegformReactive',component:RegFormReactiveComponent},
  {path:'Counter',component:CounterComponent},
  {path:'Counter1',component:Counter1Component},
  {path:'ConsumeService',component:ConsumeserviceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
