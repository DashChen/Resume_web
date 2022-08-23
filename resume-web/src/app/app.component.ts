import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RoutesRecognized } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONS_TOKEN } from './app.module';
import { IconProps } from './core/interfaces/icons';
import { AppService } from './core';


export enum Layouts {
  userLogin,
  userMain,
  adminLogin,
  adminMain,
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  Layouts = Layouts;
  layout!: Layouts;

  title = 'resume-web';

  constructor(
    private router: Router,
    private appService: AppService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    @Inject(ICONS_TOKEN) private iconsList: IconProps
    ) {
      Object.keys(iconsList).forEach((value: string) => {
        const filename = iconsList[value];
        iconRegistry.addSvgIcon(value, sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${filename}`));
      });
  }

  ngOnInit(): void {
    this.appService.route$.subscribe(route => {
      if (route && route instanceof ActivatedRouteSnapshot) {
        this.layout = route.data['layout'];
      }
    });
  }
}
