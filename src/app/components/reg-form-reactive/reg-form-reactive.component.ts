import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormArray, FormBuilder, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-reg-form-reactive',
  templateUrl: './reg-form-reactive.component.html',
  styleUrls: ['./reg-form-reactive.component.css']
})
export class RegFormReactiveComponent implements OnInit {
  regForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      name1: new FormControl('',[Validators.required]),
      txtaddr:new FormControl('',[Validators.required]),
      txtemail:new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      txtmobNo:new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
      txtpwd:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8),Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$%&]).*$")]),
      txtgender:new FormControl('',[Validators.required]),
      nation:new FormControl('',[Validators.required]),
      mycheckboxgroup : new FormGroup({
        hobby1:new FormControl(false),
        hobby2:new FormControl(false),
        hobby3:new FormControl(false),
        hobby4:new FormControl(false),
      }, this.validateCheckBox())
    });
  }
  validateCheckBox(minRequired = 1): ValidatorFn {
    return function validate(formGroup: FormGroup) {
      let checked = 0;
  
      Object.keys(formGroup.controls).forEach(key => {
        const control = formGroup.controls[key];
  
        if (control.value === true) {
          checked++;
        }
      });
  
      if (checked < minRequired) {
        return {
          requireCheckboxToBeChecked: true,
        };
      }
  
      return null;
    };
  }
     RegisterData(): void{
       console.log(this.regForm.value);
     }
  }
