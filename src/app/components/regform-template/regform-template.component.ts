import { Component, OnInit } from '@angular/core';
import { FormsModule,NgForm,FormGroup, NgModel } from '@angular/forms';
@Component({
  selector: 'app-regform-template',
  templateUrl: './regform-template.component.html',
  styleUrls: ['./regform-template.component.css']
})
export class RegformTemplateComponent implements OnInit {
  model:any = [];
  constructor() { }

  ngOnInit(): void {
  }
  RegisterData(regForm:NgForm):void{
    console.log(regForm.value);
  }

}
