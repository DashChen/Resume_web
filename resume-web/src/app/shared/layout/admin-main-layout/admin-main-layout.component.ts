import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.links.forEach((l: link) => {
      const path = this.route.snapshot.firstChild?.routeConfig?.path || '';
      if (l.link.includes(path)) {
        l.active = true;
      }
    })
  }

}
