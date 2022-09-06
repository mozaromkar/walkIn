import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.pattern("[a-zA-z].*"), Validators.minLength(2)]),
    pw: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(15)])

  })
  loginsubmitted() {
    console.log(this.loginForm.value);
  };

  get UserName(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  get PassWord(): FormControl {
    return this.loginForm.get('pw') as FormControl;
  }
}
