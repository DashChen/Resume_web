import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/core';

export interface link {
  link: string;
  title: string;
  icon: string;
  active: boolean
}

@Component({
  selector: 'app-user-main-layout',
  templateUrl: './user-main-layout.component.html',
  styleUrls: ['./user-main-layout.component.scss']
})
export class UserMainLayoutComponent implements OnInit {
  links: link[] = [
    {
      link: '/resume-management',
      title: '履歷管理',
      icon: 'menu-icon01',
      active: false,
    },
    {
      link: '/message-management',
      title: '信件簡訊管理',
      icon: 'menu-icon02',
      active: false,
    },
    {
      link: '/company-job',
      title: '職缺管理',
      icon: 'menu-icon03',
      active: false,
    },
    {
      link: '/member-management',
      title: '會員管理',
      icon: 'menu-icon04',
      active: false,
    },
  ];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.route$.subscribe((route) => {
      this.links.forEach((l: link) => {
        const path = route?.routeConfig?.path || '';
        if (l.link.includes(path)) {
          l.active = true;
        }
      })
    });
  }

}
