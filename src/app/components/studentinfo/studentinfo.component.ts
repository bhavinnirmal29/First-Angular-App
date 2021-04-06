import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.css']
})
export class StudentinfoComponent implements OnInit {
  rollno:number=245;
  name:string=  "Monica";
  branch:string = "Computer Science";
  course:string = "BTech";
  constructor() { }

  ngOnInit(): void {
  }

}
