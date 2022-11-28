import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { AppService } from '@app/core';
import { link } from '@app/core/interfaces/menu.model';
import { Actions as UserActions } from '@app/shared/store/user';
import { selectCurrentUser } from '@app/shared/store/user/user.selectors';
import { Selectors as RouterSelectors } from '@app/shared/store/router';
import { Actions as CommonActions } from '@app/shared/store/common';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-user-main-layout',
  templateUrl: './user-main-layout.component.html',
  styleUrls: ['./user-main-layout.component.scss']
})
export class UserMainLayoutComponent implements OnInit {
  @ViewChild('sidenav') sidenavRef !: MatDrawer;
  currentUser$ = this.store.select(selectCurrentUser);
  username: string = '';
  email: string = '';

  startYear: string = '2022/3';
  currentYear: string = '';
  version: string = '1.1.0';

  links: link[] = [
    {
      link: '/user/resume-management',
      key: 'resume-management',
      title: '履歷管理',
      icon: 'menu-icon01',
      active: false,
    },
    {
      link: '/user/member-management',
      key: 'member-management',
      title: '會員管理',
      icon: 'menu-icon04',
      active: false,
    },
  ];

  constructor(
    private appService: AppService,
    public router: Router,
    public store: Store,
    ) {}

  ngOnInit(): void {
    this.currentYear = DateTime.now().toFormat('yyyy/M');
    this.store.select(RouterSelectors.selectCurrentUrl).subscribe(url => {
      // console.log('selectCurrentUrl', url);
      this.links.forEach((l: link) => {
        l.active = !!(l.link && l.link.includes(url));
        if (l.children) {
          l.children.forEach((cl: link) => {
            cl.active = !!(cl.link && cl.link.includes(url));
          });
        }
      });
      this.sidenavRef.close();
    });
    this.currentUser$.subscribe(user => {
      this.username = user?.name || '';
      this.email = user?.email || '';
    });
    this.store.dispatch(CommonActions.getSexList());
  }

  logout() {
    this.store.dispatch(UserActions.logout());
  }
}
