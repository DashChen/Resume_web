import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '@app/core';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { Actions as AdminActions } from '@app/shared/store/admin';
import { link } from '@app/core/interfaces/menu.model';


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
      key: 'resume-management',
      title: '履歷管理',
      icon: 'menu-icon01',
      active: false,
    },
    {
      link: '/admin/message',
      key: 'message',
      title: '信件/簡訊管理',
      icon: 'menu-icon02',
      active: false,
      children: [
        {
          link: '/admin/message?type=email',
          key: 'message-email',
          title: '信件管理',
          icon: '',
          active: false,
        },
        {
          link: '/admin/message?type=sms',
          key: 'message-sms',
          title: '簡訊管理',
          icon: '',
          active: false,
        },
      ]
    },
    {
      link: '/admin/company-job',
      key: 'company-job',
      title: '職缺管理',
      icon: 'menu-icon03',
      active: false,
    },
    {
      link: '/admin/member',
      key: 'member',
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
