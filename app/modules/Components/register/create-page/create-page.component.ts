import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {



  ngOnInit(): void {
  }


  form: FormGroup;
  Data: Array<any> = [
    { name: 'Instructional Designer', value: 'Instructional Designer' },
    { name: 'Quality Engineer', value: 'Quality Engineer' },
    { name: 'Software Engineer', value: 'Software Engineer' },

  ];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required]),
    });
  }
  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  submitForm() {
    console.log(this.form.value);
  }



  registerForm = new FormGroup({

    firstname: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    lastname: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("", [Validators.required, Validators.email]),
    phoneNo: new FormControl("", [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)])
  });

  registersubmitted() {
    console.log(this.registerForm.value);
  };

  get FirstName(): FormControl {
    return this.registerForm.get("firstname") as FormControl;
  }

  get LastName(): FormControl {
    return this.registerForm.get("lastname") as FormControl;
  }
  get Email(): FormControl {
    return this.registerForm.get("email") as FormControl;
  }
  get PhoneNo(): FormControl {
    return this.registerForm.get("phoneNo") as FormControl;
  }

}






