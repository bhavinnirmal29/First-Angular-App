import { Component, OnInit } from '@angular/core';
import {EmpserviceService} from '../../services/empservice.service';
@Component({
  selector: 'app-consumeservice',
  templateUrl: './consumeservice.component.html',
  styleUrls: ['./consumeservice.component.css']
})
export class ConsumeserviceComponent implements OnInit {
  svc:EmpserviceService;
  empinfo:string[];

  constructor(svc:EmpserviceService) {
    this.svc=svc;
   }

  ngOnInit(): void {
    this.svc.CallEmpInfo().subscribe(data=>{
      console.log(data);
      this.empinfo = data;
      console.log(this.empinfo);
    })
  }
}
