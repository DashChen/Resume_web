import { Component, OnInit } from '@angular/core';
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

  links: link[] = [
    {
      link: '/admin/about',
      title: '履歷管理',
      icon: 'menu-icon01',
      active: false,
    },
    {
      link: '/admin/about',
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
      link: '/admin/about',
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
