import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { Observable } from 'rxjs';
import { Selectors as  CommonSelectors } from '@app/shared/store/common';
import { BaseDestoryComponent } from '@app/shared/components/base-destory.component';

@Component({
  selector: 'app-user-login-layout',
  templateUrl: './user-login-layout.component.html',
  styleUrls: ['./user-login-layout.component.scss']
})
export class UserLoginLayoutComponent extends BaseDestoryComponent implements OnInit {
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
