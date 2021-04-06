import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter1',
  template: `
    <div>
      <span (click) = "increment()" class="span-button" [class]="styles1">I am Button : &nbsp;<span [class]="styles1">{{num}}</span></span>
    </div>
  `,
  styles: [`
  .span-button{
    width:100px;
    height:40px;
    border:2px solid black;
    line-height:30px;
  }
  .style1 {
    background-color:darkblue;
    }
  .style2{
  color:yellow;
  font-size:30px;
  }
  `]
})
export class Counter1Component implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  styles1:string = "style1 style2";
  num:number = 0;
  flag:boolean=false;
  increment():void{
    if(this.flag==false){
      this.num+=2;
      this.styles1 = "style1 style2";
      this.flag=true;
    }
    else{
      this.num-=2;
      this.styles1= "style2";
      this.flag=false;
    }
  }
}
