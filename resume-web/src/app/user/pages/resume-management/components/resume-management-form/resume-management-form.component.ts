import { Component, OnInit } from '@angular/core';
import { ISelectOption } from '@app/core/interfaces/select-option';

@Component({
  selector: 'app-resume-management-form',
  templateUrl: './resume-management-form.component.html',
  styleUrls: ['./resume-management-form.component.scss']
})
export class ResumeManagementFormComponent implements OnInit {

  jobOptions: ISelectOption[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
