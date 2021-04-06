import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {
  fname:string="Duke";
  num1:number=2;
  num2:number=3;
  result:number=0;
  // result:number=this.num1+this.num2;

  //Gross Salary
  basic_sal = 13200;
  da = this.basic_sal *(10/100);
  pf = this.basic_sal * (12.5/100);
  conveyence = this.basic_sal * (8/100);
  hra = this.basic_sal *(30/100);
  gross=this.basic_sal +this.da+this.conveyence+this.hra;
  net_Sal = this.gross - this.pf;
  
  constructor() { }

  ngOnInit(): void {
  }
  showValue():void{
    alert("The Value = "+this.fname);
  }
  convertToInt(val):number{
    return parseInt(val);
  }
  addMethod():void{
    this.result=this.convertToInt(this.num1)+this.convertToInt(this.num2);
  }
}
