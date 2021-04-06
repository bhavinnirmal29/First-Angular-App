import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onewaybinding',
  templateUrl: './onewaybinding.component.html',
  styleUrls: ['./onewaybinding.component.css']
})
export class OnewaybindingComponent implements OnInit {
  url:string = "assets/images/a4.jpg";
  h:number=150;
  w:number=200;
  click:string="Greet";
  counter:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  sayHi():void{
    alert("Button Clicked....Hiiii To Everyone");
  }
  increment():void{
    this.counter++;
  }
  decrement():void{
    this.counter--;
  }

}
