import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken } from '@angular/core';
import {BREAKPOINTS, DEFAULT_BREAKPOINTS, FlexLayoutModule} from '@angular/flex-layout';

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

export const BreakPointsProvider = {
  provide: BREAKPOINTS,
  // useValue: Object.assign(DEFAULT_BREAKPOINTS, {
  //   'sm': 'screen and (min-width: 600px) and (max-width: 1000px)',
  //   'md': 'screen and (min-width: 1001px) and (max-width: 1279px)',
  //   'lt-md': 'screen and (max-width: 1000px)',
  //   'gt-sm': 'screen and (min-width: 1001px)'
  // }),
  useValue: DEFAULT_BREAKPOINTS,
  multi: true
};


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
    BreakPointsProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
