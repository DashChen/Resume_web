import { Component, OnInit } from '@angular/core';
import { BaseDestoryComponent } from '@app/shared/components/base-destory.component';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { Selectors as  CommonSelectors } from '@app/shared/store/common';

@Component({
  selector: 'app-admin-login-layout',
  templateUrl: './admin-login-layout.component.html',
  styleUrls: ['./admin-login-layout.component.scss']
})
export class AdminLoginLayoutComponent extends BaseDestoryComponent implements OnInit {
  isLoading: boolean = false;
  startYear: string = '2022/3';
  currentYear: string = '';

  constructor(
    private store: Store
  ) {
    super();
  }

  ngOnInit(): void {
    this.currentYear = DateTime.now().toFormat('yyyy/M');
    this.store.select(CommonSelectors.selectApiLoading).subscribe(
      res => this.isLoading = res
    );
  }

}
