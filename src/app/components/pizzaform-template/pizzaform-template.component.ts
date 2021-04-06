import { Component, OnInit } from '@angular/core';
import { FormsModule,NgForm,FormGroup, NgModel } from '@angular/forms';
@Component({
  selector: 'app-pizzaform-template',
  templateUrl: './pizzaform-template.component.html',
  styleUrls: ['./pizzaform-template.component.css']
})
export class PizzaformTemplateComponent implements OnInit {
  model1:any = [];
  toppingStatus:string = "Pizza Topping Required";
  constructor() { }

  ngOnInit(): void {
  }
  orderPizza(pizzaForm:NgForm):void{
    console.log(pizzaForm.value);
    
  }
  checkToppings(pizzaForm:NgForm):void{
    if(pizzaForm.value.capsicum!=undefined){
      this.toppingStatus = "";
    }
  }
}
