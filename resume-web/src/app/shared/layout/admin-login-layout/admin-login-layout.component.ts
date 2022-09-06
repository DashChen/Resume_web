import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-admin-login-layout',
  templateUrl: './admin-login-layout.component.html',
  styleUrls: ['./admin-login-layout.component.scss']
})
export class AdminLoginLayoutComponent implements OnInit {
  startYear: string = '2022/3';
  currentYear: string = '';

  constructor() { }

  ngOnInit(): void {
    this.currentYear = DateTime.now().toFormat('yyyy/M');
  }

}
