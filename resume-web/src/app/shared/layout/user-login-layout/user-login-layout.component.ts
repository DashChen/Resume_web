import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-user-login-layout',
  templateUrl: './user-login-layout.component.html',
  styleUrls: ['./user-login-layout.component.scss']
})
export class UserLoginLayoutComponent implements OnInit {
  startYear: string = '2022/3';
  currentYear: string = '';

  constructor() { }

  ngOnInit(): void {
    this.currentYear = DateTime.now().toFormat('yyyy/M');
  }

}
