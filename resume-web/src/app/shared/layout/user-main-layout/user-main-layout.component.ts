import { Component, OnInit } from '@angular/core';

export interface link {
  link: string;
  title: string;
  icon?: string;
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
      icon: '',
    },
    {
      link: '/resume-management',
      title: '信件簡訊管理',
      icon: '',
    },
    {
      link: '/resume-management',
      title: '職缺管理',
      icon: '',
    },
    {
      link: '/resume-management',
      title: '會員管理',
      icon: '',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
