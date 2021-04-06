import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.css']
})
export class SalaryCalculatorComponent implements OnInit {
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

}
