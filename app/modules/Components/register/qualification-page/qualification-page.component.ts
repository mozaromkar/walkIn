import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualification-page',
  templateUrl: './qualification-page.component.html',
  styleUrls: ['./qualification-page.component.scss']
})
export class QualificationPageComponent implements OnInit {

  constructor() { }

  showExpdiv() {
    const fresherEl = document.getElementById('fresher') as HTMLElement;
    const experiencedEl = document.getElementById('experienced') as HTMLElement;
    experiencedEl.style.display = 'none';
    fresherEl.style.display = 'block';
  }
  showFreshdiv() {
    const fresherEl = document.getElementById('fresher') as HTMLElement;
    const experiencedEl = document.getElementById('experienced') as HTMLElement;
    experiencedEl.style.display = 'block';
    fresherEl.style.display = 'none';
  }

  passingYear = [
    '2020',
    '2021',
    '2022',
    '2023',
  ];

  showBlock() {
    const educationBox = document.getElementById('qbox') as HTMLElement;
    educationBox.style.display = 'block';
    educationBox.style.display = 'none';
  }

  educationForm = new FormGroup({
    percentage: new FormControl("", [Validators.required, Validators.pattern("[0-9].*"), Validators.minLength(2), Validators.maxLength(2)]),
    collegecity: new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z].*")])

  })

  educationsubmitted() {
    console.log(this.educationForm.value);
  }

  get Percentage(): FormControl {
    return this.educationForm.get('percentage') as FormControl;
  }

  get CollegeCity(): FormControl {
    return this.educationForm.get('collegecity') as FormControl;
  }


  experienceForm = new FormGroup({
    yearofexp: new FormControl("", [Validators.required]),
    currentctc: new FormControl("", [Validators.required]),
    expctc: new FormControl("", [Validators.required]),
    noticedate: new FormControl("", [Validators.required]),
    noticeperiod: new FormControl("", [Validators.required]),
    zeustest: new FormControl("", [Validators.required])

  })

  experiencesubmitted() {
    console.log(this.experienceForm.value);
  }

  get YearOfExp(): FormControl {
    return this.experienceForm.get('yearofexp') as FormControl;
  }

  get CurrentCtc(): FormControl {
    return this.experienceForm.get('currentctc') as FormControl;
  }
  get ExpCtc(): FormControl {
    return this.experienceForm.get('expctc') as FormControl;
  }
  get NoticeDate(): FormControl {
    return this.experienceForm.get('noticedate') as FormControl
  }
  get NoticePeriod(): FormControl {
    return this.experienceForm.get('noticeperiod') as FormControl;
  }
  get ZeusTest(): FormControl {
    return this.experienceForm.get('zeustest') as FormControl;
  }
  ngOnInit(): void {

  }
}