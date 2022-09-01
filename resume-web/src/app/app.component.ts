import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RoutesRecognized } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONS_TOKEN } from './app.module';
import { IconProps } from './core/interfaces/icons';
import { AppService } from './core';
import { ResizeService } from './core/services/resize.service';
import { ViewportSize } from './core/interfaces/breakpoints';


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
export class AppComponent implements OnInit, AfterViewInit {
  Layouts = Layouts;
  layout!: Layouts;

  title = 'resume-web';

  constructor(
    private router: Router,
    private appService: AppService,
    private elementRef: ElementRef,
    private resizeSvc: ResizeService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    @Inject(ICONS_TOKEN) private iconsList: IconProps
    ) {
      Object.keys(iconsList).forEach((value: string) => {
        const filename = iconsList[value];
        iconRegistry.addSvgIcon(value, sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${filename}`));
      });
  }

  @HostListener("window:resize", [])
  private onResize() {
    this.detectScreenSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  ngOnInit(): void {
    this.appService.route$.subscribe(route => {
      if (route && route instanceof ActivatedRouteSnapshot) {
        this.layout = route.data['layout'];
      }
    });
  }

  ngAfterViewInit() {
    this.detectScreenSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  private detectScreenSize(size: ViewportSize) {
    this.resizeSvc.onResize(size);
  }
}
