import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '@app/core';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { Actions as AdminActions } from '@app/shared/store/admin';

export interface link {
  link: string;
  title: string;
  icon: string;
  active: boolean
}
@Component({
  selector: 'app-admin-main-layout',
  templateUrl: './admin-main-layout.component.html',
  styleUrls: ['./admin-main-layout.component.scss']
})
export class AdminMainLayoutComponent implements OnInit {
  startYear: string = '2022/3';
  currentYear: string = '';
  username: string = '王大明';
  email: string = 'WuDaMing@gmail.com';

  links: link[] = [
    {
      link: '/admin/resume-management',
      title: '履歷管理',
      icon: 'menu-icon01',
      active: false,
    },
    {
      link: '/admin/message',
      title: '信件/簡訊管理',
      icon: 'menu-icon02',
      active: false,
    },
    {
      link: '/admin/company-job',
      title: '職缺管理',
      icon: 'menu-icon03',
      active: false,
    },
    {
      link: '/admin/member',
      title: '會員管理',
      icon: 'menu-icon04',
      active: false,
    },
  ];

  constructor(
    private appService: AppService,
    private router: Router,
    public store: Store,
    ) {}

  ngOnInit(): void {
    this.currentYear = DateTime.now().toFormat('yyyy/M');
    this.appService.route$.subscribe((route) => {
      this.links.forEach((l: link) => {
        const path = route?.routeConfig?.path || '';
        l.active = l.link.includes(path);
      })
    });
    // TODO Update username from store
  }

  logout() {
    this.store.dispatch(AdminActions.setLoggedIn({ logged: false }));
    this.router.navigate(['/admin/login']);
  }
}
