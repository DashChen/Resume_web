import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from "@angular/router";
import { BehaviorSubject, filter } from "rxjs";
import { OnAppInit } from "../interfaces/app.model";

// app.service.ts
@Injectable({
    providedIn: 'root'
})
export class AppService implements OnAppInit {

  route$: BehaviorSubject<ActivatedRouteSnapshot|null> = new BehaviorSubject<ActivatedRouteSnapshot|null>(null);

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnAppInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      let route = this.route.snapshot;
      while (route.firstChild) {
        route = route.firstChild;
      }
      this.route$.next(route);
    });
  }
}