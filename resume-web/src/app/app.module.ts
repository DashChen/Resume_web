import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken } from '@angular/core';
import { BREAKPOINTS, DEFAULT_BREAKPOINTS, BreakPoint, FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule, DialogModule, ComponentModule } from './shared';
import { AdminModule } from './admin';
import { environment } from '../environments/environment';
import { UserModule } from './user';

import * as icons from '@assets/icons.json';
import { IconProps } from './core/interfaces/icons';
import * as country from '@assets/country.json';
import { ICountry } from './core/interfaces/country';
import { AppService } from './core';

const iconObj: IconProps = JSON.parse(JSON.stringify(icons));
const countryObj: ICountry = JSON.parse(JSON.stringify(country));
export const ICONS_TOKEN = new InjectionToken<IconProps>('icons token',
{
  providedIn: 'root',
  factory: () => (iconObj)
});
export const COUNTRY_TOKEN = new InjectionToken<ICountry>('country token',
{
  providedIn: 'root',
  factory: () => (countryObj)
});

function updateBreakpoints(bp: BreakPoint) {
  switch (bp.alias) {
    case 'sm':
      bp.mediaQuery = 'screen and (min-width: 600px) and (max-width: 1000px)';
      break;
    case 'md':
      bp.mediaQuery = 'screen and (min-width: 1001px) and (max-width: 1279px)';
      break;
    case 'lt-md':
      bp.mediaQuery = 'screen and (max-width: 1000px)';
      break;
    case 'gt-sm':
      bp.mediaQuery = 'screen and (min-width: 1001px)';
      break;
  }
  return bp;
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    ComponentModule,
    DialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AdminModule,
    UserModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [
    {
      multi: true,
      provide: APP_INITIALIZER,
      useFactory: function initializeRoutes(appService: AppService) {
        return () => appService.ngOnAppInit();
      },
      deps: [AppService]
    },
    { provide: 'API_BASE_URL', useValue: environment.apiBaseUrl },
    { provide: ICONS_TOKEN, useValue: iconObj },
    { provide: COUNTRY_TOKEN, useValue: countryObj },
    {
      provide: BREAKPOINTS,
      useFactory: function customizeBreakPoints() {
        return DEFAULT_BREAKPOINTS.map(updateBreakpoints);
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
