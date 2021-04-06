import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1:number = 40;
  num2:number = 10;
  sum1 = this.num1+this.num2;
  mul1 = this.num1*this.num2;
  div1 = this.num1/this.num2;
  sub1 = this.num1-this.num2;
  
  constructor() { }

  ngOnInit(): void {
  }

}
