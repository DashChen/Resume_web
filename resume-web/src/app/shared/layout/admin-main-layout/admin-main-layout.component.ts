import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '@app/core';
import { Store } from '@ngrx/store';
import { DateTime } from 'luxon';
import { Actions as AdminActions, Selectors as AdminSelectors } from '@app/shared/store/admin';
import { link } from '@app/core/interfaces/menu.model';

@Component({
  selector: 'app-admin-main-layout',
  templateUrl: './admin-main-layout.component.html',
  styleUrls: ['./admin-main-layout.component.scss']
})
export class AdminMainLayoutComponent implements OnInit {
  currentUser$ = this.store.select(AdminSelectors.selectCurrentUser);
  startYear: string = '2022/3';
  currentYear: string = '';
  username: string = '';
  email: string = '';

  links: link[] = [
    {
      link: '/admin/resume-invitation',
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
    this.currentUser$.subscribe(user => {
      this.username = user?.name || '';
      this.email = user?.email || '';
    })
  }

  logout() {
    this.store.dispatch(AdminActions.logout());
  }
}
