import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '@app/core';
import { link } from '@app/core/interfaces/menu.model';
import { Actions as UserActions } from '@app/shared/store/user';
import { selectCurrentUser } from '@app/shared/store/user/user.selectors';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-user-main-layout',
  templateUrl: './user-main-layout.component.html',
  styleUrls: ['./user-main-layout.component.scss']
})
export class UserMainLayoutComponent implements OnInit {
  currentUser$ = this.store.select(selectCurrentUser);
  username: string = '';
  email: string = '';

  startYear: string = '2022/3';
  currentYear: string = '';
  version: string = '1.1.0';

  links: link[] = [
    {
      link: '/resume-management',
      key: 'resume-management',
      title: '履歷管理',
      icon: 'menu-icon01',
      active: false,
    },
    {
      link: '/member-management',
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
    this.appService.route$.subscribe((route) => {
      this.links.forEach((l: link) => {
        const path = route?.routeConfig?.path || '';
        if (l.link.includes(path)) {
          l.active = true;
        }
      })
    });
    this.currentUser$.subscribe(user => {
      this.username = user.userName || '王大明';
      this.email = user.email || 'WuDaMing@gmail.com';
    })
  }

  logout() {
    this.store.dispatch(UserActions.setLoggedIn({ logged: false }));
    this.router.navigate(['/login']);
  }
}
