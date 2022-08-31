import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '@app/core';
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
  username: string = '王大明';
  email: string = 'WuDaMing@gmail.com';

  links: link[] = [
    {
      link: '/admin/resume',
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
    private router: Router
    ) {}

  ngOnInit(): void {
    this.appService.route$.subscribe((route) => {
      this.links.forEach((l: link) => {
        const path = route?.routeConfig?.path || '';
        l.active = l.link.includes(path);
      })
      console.log(this.links);
    });
  }

  logout() {
    // TODO: Logout update store
    this.router.navigate(['/admin/login']);
  }
}
